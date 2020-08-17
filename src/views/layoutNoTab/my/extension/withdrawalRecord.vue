<!--立刻提现-->
<template>
  <div ref="content" class="content">
    <img class="back" :src="require('@/static/img/redBack.png')" alt="">
    <div ref="header" class="moneyList">
      <div class="card">
        可提现佣金：&nbsp;&nbsp;
        <p class="money">￥{{aggregateMoney}}</p>
        <p class="clickAll">全部提现</p>
      </div>
    </div>

    <list :style="{height:listHeight}" :curr-length="list.length" @getData="getList">

    </list>
  </div>
</template>

<script>
import page from "@/mixin/page";

export default {
  name: "withdrawDeposit",
  mixins: [page],
  data() {
    return {
      aggregateMoney: 3250,  //总金额
      list: []
    }
  },
  methods: {
    getList(){

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
  }
}
</style>
