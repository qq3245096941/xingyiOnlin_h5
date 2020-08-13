<!--商品详情-->
<template>
  <div class="content">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in info.shopCover">
        <img :src="imgPrefixUrl+item" alt="">
      </van-swipe-item>
    </van-swipe>

    <div class="body">
      <p>{{info.shopName}}</p>
      <p>售价：<span class="price">￥{{info.shopPrice}}</span></p>

      <div class="userMessage">
        <p>藏品所有者</p>
        <p class="nickname">{{info.userName}}</p>
        <p class="describe">
          {{info.shopDesc}}
        </p>
      </div>
    </div>

    <van-button class="btn" block type="danger" v-if="isStart===false">
      还未开始(
      <van-count-down style="color: #fff;display: inline" :time="timeRemaining" @finish="finish"/>  <!--//默认毫秒-->
      )
    </van-button>

    <van-button v-else class="btn" block type="danger" @click="purchase">立即抢购</van-button>

    <!--购买协议-->
    <agreement :isShow.sync="isShow" @look="submitOrder"></agreement>
  </div>
</template>

<script>
import {shopInfo} from '@/api/shop'

export default {
  name: "commodityDetails",
  data() {
    return {
      isShow: false,  //展示购买协议
      timeRemaining: 0,  //倒计时
      isStart: false,  //是否开始抢购
      info:{}  //商品详情
    }
  },
  methods: {
    purchase() {
      this.isShow = true;
    },
    submitOrder() {
      this.$router.push({
        path: '/layoutNoTab/submitOrder'
      })
    },
    /*倒计时结束时*/
    finish() {
      this.isStart = true;
    }
  },
  created() {
    shopInfo({
      shopId: this.$route.query.shopId
    }).then(data=>{
      this.info = data.data;
      this.info.shopCover = this.info.shopCover.split(',');

      //倒计时
      this.Moment(this.info.openDate);  //开始时间

      console.log(this.info);
    })
  },
  mounted() {
    this.timeRemaining = 2 * 1000;
  }
}
</script>

<style scoped lang="scss">
.content {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;

  .price {
    color: #ed4014;
    font-weight: bold;
  }

  img {
    display: block;
    width: 100%;
  }

  .body {
    border-radius: 10px;
    background: #fff;
    top: -50px;
    padding: 10px 20px;
    margin: 0 30px;
    position: relative;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);

    .userMessage {
      display: flex;
      flex-direction: column;
      align-items: center;

      .describe {
        font-size: 15px;
      }
    }
  }

  .btn {
    z-index: 1000;
    position: fixed;
    bottom: 0;
    width: 100%;
  }
}
</style>
