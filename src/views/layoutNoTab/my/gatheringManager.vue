<!--收款中心-->
<template>
  <div class="content">
    <div class="userPayList card">
      <!--item-->
      <div class="item" v-for="(item,index) in payList">
        <img :src="item.icon" alt="">
        <div class="btns">
          <span @click="look(item)">查看</span>

          <!--          <fileUpload v-if="item.payType===1 || item.payType===0" @change="edit($event,item)">-->
          <!--            <span>修改</span>-->
          <!--          </fileUpload>-->

          <!--          &lt;!&ndash;编辑银行卡&ndash;&gt;-->
          <!--          <span v-else @click="edit('',item)">{{item.payUrl ? '查看' : '修改'}}</span>-->

          <!--          <span @click="deleteItem(item)">删除</span>-->
        </div>

        <van-divider/>
      </div>

      <!-- 通用错误 -->
      <van-empty v-show="payList.length===0" description="请选择一个付款方式"/>
    </div>

    <van-button style="position: fixed;width: 100%;bottom: 0;left: 0" type="danger" @click="isShow=true">添加支付方式
    </van-button>

    <van-popup v-model="isShow" position="bottom" @close="isShow = false">
      <div class="payType">
        <h3 class="title">选择支付方式</h3>

        <div class="payList">
          <div v-for="item in list" class="payItem">

            <fileUpload @change="addPayType($event,item)" v-if="item.type<2">
              <div class="itemBody">
                <img :src="item.icon" alt="">
                <p>{{item.title}}</p>
              </div>
            </fileUpload>

            <div v-else class="itemBody" @click="addBank(item)">
              <img :src="item.icon" alt="">
              <p>{{item.title}}</p>
            </div>

          </div>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import zhifubao from '@/assets/img/my/zhifubao.svg';
import weiixn from '@/assets/img/my/weiixn.svg';
import yinhangka from '@/assets/img/my/yinhangka.svg';
import BankCard from "@/components/BankCard";

import {addPay, payList, deletePay, updatePay} from '@/api/pay'

export default {
  name: "gatheringManager",
  components: {BankCard},
  data() {
    return {
      list: [],
      isShow: false,
      payList: []
    }
  },
  mounted() {
    this.getList();
  },
  methods: {
    look(item) {
      if (!item.payUrl) {
        this.$router.push({
          path: '/layoutNoTab/bankCardEdit',
          query: {
            payId: item.payId
          }
        })
        return;
      }

      this.ImagePreview([
        this.imgPrefixUrl + item.payUrl
      ]);
    },
    edit(res, item) {
      //判断res是否存在，如存在，也就表明此方法是上传文件回调进来的，也表示不是银行卡修改。
      if (res) {
        updatePay({
          payId: item.payId,
          payUrl: res
        }).then(data => {
          this.getList();
        })
      } else {
        /*编辑银行卡*/
        this.$router.push({
          path: '/layoutNoTab/bankCardEdit',
          query: {
            payId: item.payId
          }
        })
      }
    },
    /*获取支付数据*/
    getList() {
      payList({userId: this.userInfo.userId}).then(data => {
        this.payList = data.data.map(item => {
          let icon = '';

          switch (item.payType) {
            case '0':
              icon = zhifubao;
              break;
            case '1':
              icon = weiixn;
              break;
            case '2':
              icon = yinhangka;
              break;
          }

          return {
            icon,
            payType: Number.parseInt(item.payType),
            payUrl: item.payUrl,
            payId: item.payId
          }
        })

        this.list = [
          {
            icon: zhifubao,
            title: '支付宝',
            type: 0
          },
          {
            icon: weiixn,
            title: '微信',
            type: 1
          },
          {
            icon: yinhangka,
            title: '银行卡',
            type: 2
          }
        ];

        /*过滤掉已经添加的支付方式*/
        this.list = this.list.filter(item => {
          let pay = this.payList.find(pay => {
            return pay.payType === item.type;
          })

          if (!pay) {
            return item;
          }

          if (item.type !== pay.payType) {
            return item;
          }
        })
      })
    },

    /*添加支付方式，但不包括银行卡*/
    addPayType(imgUrl, item) {
      addPay({
        payName: item.title,
        payType: item.type,
        userId: this.userInfo.userId,
        payUrl: imgUrl
      }).then(data => {
        this.getList();
        this.isShow = false;
      })
    },
    /*只添加银行卡*/
    addBank(item) {
      this.$router.push({
        path: '/layoutNoTab/bankCardEdit',
        query: {
          payId: item.payId
        }
      })
    },
    /*删除支付方式*/
    deleteItem(item) {
      this.Dialog.confirm({
        title: '确定删除吗'
      }).then(() => {
        deletePay({
          payId: item.payId
        }).then(data => {
          this.getList();
        })
      })
    }
  }
}
</script>

<style scoped lang="scss">
.itemBody {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.content {
  width: 100%;
  height: 100%;


  .userPayList {
    .item {
      display: flex;
      align-items: center;
      margin: 10px;

      .btns {
        flex: 1;
        display: flex;
        flex-direction: row-reverse;
        align-items: center;

        span {
          font-size: 12px;
        }
      }
    }
  }

  .payType {
    .title {
      text-align: center;
    }

    .payList {
      display: flex;
      align-content: center;
      margin: 50px 0;

      .payItem {
        flex: 1;
        display: flex;
        align-content: center;
        flex-direction: column;

        p {
          text-align: center;
          font-size: 13px;
        }
      }

    }
  }
}
</style>
