<!--立刻提现-->
<template>
  <div ref="content" class="content">
    <img class="back" :src="require('@/static/img/redBack.png')" alt="">
    <div ref="header" class="moneyList">
      <div class="card">
        可提现佣金：&nbsp;&nbsp;
        <p class="money">￥{{account.userSumComm}}</p>
        <p class="clickAll" @click="$router.push({path:'/layoutNoTab/withdrawDeposit'})">全部提现</p>
      </div>
    </div>

    <list :style="{height:listHeight}" style="padding-bottom: 55%;z-index: 1000" :curr-length="list.length" @getData="getList" :total="total">
      <div class="item" v-for="(item,index) in list" :key="index">
        <p style="margin-left: 13px">{{item.createDate.split(" ")[0]}}</p>
        <div class="card body">
          <div>
            <p>提现金额</p>
            <p style="margin-top: 10px">{{item.createDate}}</p>
            <p>
              <van-tag type="warning" v-if="item.withdrawalStat==='0'">审核中</van-tag>
              <van-tag type="success" v-if="item.withdrawalStat==='1'">审核通过</van-tag>
              <van-tag type="danger" v-if="item.withdrawalStat==='2'">审核失败</van-tag>
              <van-tag type="primary" v-if="item.withdrawalStat==='3'">拒绝申请</van-tag>
            </p>
          </div>

          <div class="amountMoney">￥{{item.money}}</div>
        </div>
      </div>
    </list>

    <van-button @click="$router.push({path:'/layoutNoTab/withdrawDeposit'})" class="btn" type="danger">立刻提现</van-button>
  </div>
</template>

<script>
import page from "@/mixin/page";
import {withAll} from '@/api/withdraw'
import {getUserInfo} from '@/api/user'

export default {
  name: "withdrawDeposit",
  mixins: [page],
  data() {
    return {
      list: [],
      account: {}
    }
  },
  mounted() {
    getUserInfo({
      userId: this.userInfo.userId
    }).then(data => {
      this.account = data.account;
    })
  },
  methods: {
    getList() {
      withAll({
        userId: this.userInfo.userId,
        page: this.currPage,
        rows: this.pageSize
      }).then(data => {
        this.currPage++;
        this.total = data.totalCount;
        this.list = [...this.list, ...data.list];
      })
    }
  }
}
</script>

<style scoped lang="scss">
.content {
  top: 0;
  position: absolute;
  width: 100%;
  height: 100%;

  .item {

    .body {
      position: relative;

      .amountMoney {
        position: absolute;
        top: 10px;
        right: 10px;
        color: #ed4014;
        font-weight: bold;
        font-size: 30px;
      }
    }
  }

  .back {
    display: block;
    width: 100%;
    position: absolute;
    top: 0;
  }

  .moneyList {
    margin-top: 40%;
    position: relative;

    .money {
      color: #ed4014;
      font-weight: bold;
      font-size: 20px;
    }

    .clickAll {
      position: absolute;
      right: 20px;
      top: 5px;
      font-size: 13px;
    }
  }

  .btn {
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 10000;
  }
}
</style>
