<!--粉丝订单-->
<template>
  <div ref="content" class="content">
    <div ref="header">
      <img class="back" :src="require('@/static/img/redBack.png')" alt="">
    </div>

    <div class="message">
      <p style="font-size: 13px">累计推广订单</p>
      <p><span>{{source.sourceCount}}单</span>&nbsp;<span>￥{{source.sumMoney}}</span></p>
    </div>

    <div :style="{height:listHeight,overflow:'auto'}" v-for="(item,index) in list" :key="index">
      <p class="month">{{item.createYear}}</p>
      <p class="month">本月累计订单：{{item.orderNum}}单，累计金额￥{{item.moneyNum}}</p>

      <div class="card" v-for="(childItem,childIndex) in item.list" :key="childIndex">
        <div class="user">
          <van-image width="35" height="35" round :src="filterAvatar(childItem.userTx)"/>
          <p class="nickname">{{childItem.nickName}}</p>
          <p class="money">佣金：<span style="color: #ed4014;font-weight: bold">￥{{childItem.sourceMoney}}</span></p>
        </div>
        <p>订单号：{{childItem.orderId}}</p>
        <p>下单时间：{{childItem.createDate}}</p>
      </div>

    </div>

  </div>
</template>

<script>
import {sourceYearTeamAll, sourceMonthTeamAll} from '@/api/order'
import page from "@/mixin/page";

export default {
  name: "fansOrder",
  mixins: [page],
  data() {
    return {
      source: {},
      list: []
    }
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList() {
      sourceYearTeamAll({
        userId: this.userInfo.userId,
        page: this.currPage,
        rows: 9999
      }).then(async data => {
        this.currPage++;
        this.source = data.obj;

        this.list = await Promise.all(data.list.map(async item => {
          let moneyNum = 0;
          let orderNum = 0;

          item.list = (await sourceMonthTeamAll({
            userId: this.userInfo.userId,
            createYear: item.createYear,
            page: 1,
            rows: 9999
          })).sourceList;

          item.list.forEach(item => {
            moneyNum = moneyNum + item.sourceMoney;
            orderNum++;
          })

          item.moneyNum = moneyNum.toFixed(2);
          item.orderNum = orderNum;

          return item;
        }))
      })
    }
  }
}
</script>

<style scoped lang="scss">
.content {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;

  p {
    font-size: 13px;
  }

  .month {
    margin-left: 15px;
  }

  .back {
    display: block;
    width: 100%;
  }

  .message {
    position: absolute;
    top: 15%;
    color: #fff;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .user {
    display: flex;
    align-items: center;
    font-size: 13px;

    .nickname {
      margin-left: 10px;
    }

    .money {
      flex: 1;
      text-align: right;
      margin-right: 10px;
    }
  }
}
</style>
