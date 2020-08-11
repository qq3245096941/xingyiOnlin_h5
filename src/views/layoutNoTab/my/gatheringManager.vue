<!--收款中心-->
<template>
  <div class="content">
    <template v-for="(item,index) in list">
      <div class="item">
        <img :src="item.icon" alt="">
        <div class="btns">
          <fileUpload v-if="index===1||index===0" @change="getImg($event,index)">
            <span @click="edit(index)">修改</span>
          </fileUpload>

          <span v-else @click="edit(index)">修改</span>

          <span @click="look(index)" v-show="item.imgUrl">查看</span>
        </div>
      </div>
      <van-divider v-if="index<2"/>
    </template>
  </div>
</template>

<script>
import zhifubao from '../../../assets/img/my/zhifubao.svg';
import weiixn from '../../../assets/img/my/weiixn.svg';
import yinhangka from '../../../assets/img/my/yinhangka.svg';

import {addPay, payList} from '@/api/pay'

export default {
  name: "gatheringManager",
  data() {
    return {
      list: [
        {
          icon: zhifubao,
          imgUrl: ''
        },
        {
          icon: weiixn,
          imgUrl: ''
        },
        {
          icon: yinhangka,
          imgUrl: ''
        }
      ]
    }
  },
  mounted() {
    this.getList();
  },
  methods: {
    look(index) {
      this.ImagePreview([
        this.imgPrefixUrl + this.list[index].imgUrl
      ]);
    },
    edit(index) {
      if (index === 2) {

      }
    },
    getImg(res, index) {
      this.list[index] = res;

      if (index === 0) {
        /*支付宝*/
        addPay({
          payName: '支付宝',
          payType: 0,
          userId: this.userInfo.userId,
          payUrl: res,
        }).then(data=>{
          this.getList();
        })
      }

      if (index === 1) {
        /*支付宝*/
        addPay({
          payName: '微信',
          payType: 1,
          userId: this.userInfo.userId,
          payUrl: res,
        }).then(data=>{
          this.getList();
        })
      }
    },
    /*获取支付数据*/
    getList() {
      payList({userId: this.userInfo.userId}).then(data => {

        /*支付宝*/
        this.list[0].imgUrl = data.data.find(item => {
          return item.payType === '0'
        }).payUrl

        this.list[1].imgUrl = data.data.find(item => {
          return item.payType === '1'
        }).payUrl
      })
    }
  }
}
</script>

<style scoped lang="scss">
.content {
  margin: 10px;
  background: #fff;
  padding: 10px 20px 20px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);

  .item {
    display: flex;
    align-items: center;
    margin-top: 10px;

    .btns {
      flex: 1;
      text-align: right;

      span {
        margin-right: 10px;
      }
    }
  }
}
</style>
