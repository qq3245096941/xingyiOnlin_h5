<!--商品详情-->
<template>
  <div class="content">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in info.shopUrlList">
        <img :src="imgPrefixUrl+item" alt="">
      </van-swipe-item>
    </van-swipe>

    <div class="body">
      <p>{{info.shopName}}</p>
      <p>售价：<span class="price">￥{{info.shopPrice}}</span></p>

      <div class="userMessage">
        <p>藏品所有者</p>
        <p class="nickname">{{info.userName}}</p>
        <p class="describe" v-html="info.shopDesc">
        </p>
      </div>
    </div>

    <van-button class="btn" block type="danger" v-if="time.isStart===false">
      未开始(
      <van-count-down style="color: #fff;display: inline" :time="time.timeRemaining" @finish="finish"/>  <!--//默认毫秒-->
      )
    </van-button>

    <van-button v-if="time.isStart&&time.isEnd===false" class="btn" block type="danger" @click="purchase">立刻购买
    </van-button>

    <van-button v-if="time.isEnd" :disabled="time.isEnd" class="btn" block type="danger">已结束</van-button>

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

      info: {},  //商品详情

      time: {
        startTime: 0,
        endTime: 0,
        currentTime: 0,

        startTimeRemaining: 0,

        isStart: false,  //是否开始抢购
        isEnd: false //是否已经结束
      }
    }
  },
  methods: {
    purchase() {
      this.isShow = true;
    },
    submitOrder() {
      this.$router.push({
        path: '/layoutNoTab/submitOrder',
        query: {
          shopId: this.$route.query.shopId
        }
      })
    },

    /*倒计时结束时*/
    finish() {
      this.time.isStart = true;

      let interval = setInterval(() => {
        this.time.currentTime = this.Moment().valueOf();
        if (this.time.currentTime > this.time.endTime) {
          this.time.isEnd = true;
          clearInterval(interval);
        } else {
          this.time.isEnd = false;
        }

      }, 1000)
    }
  },
  created() {
    shopInfo({
      shopId: this.$route.query.shopId
    }).then(data => {
      this.info = data.data;
      this.info.shopCover = this.info.shopCover.split(',');  //轮播图

      //倒计时
      this.time.currentTime = this.Moment().valueOf();
      this.time.startTime = this.Moment(this.Moment().format('YYYY-MM-DDT' + this.info.openDate), this.Moment.HTML5_FMT.DATETIME_LOCAL_SECONDS).valueOf();  //商品开始时间
      this.time.endTime = this.Moment(this.Moment().format('YYYY-MM-DDT' + this.info.closeDate), this.Moment.HTML5_FMT.DATETIME_LOCAL_SECONDS).valueOf(); //商品结束时间

      /*未开始*/
      if (this.time.currentTime < this.time.startTime) {
        this.time.timeRemaining = this.time.startTime - this.time.currentTime;
        this.time.isStart = false;
      } else if (this.time.currentTime >= this.time.startTime && this.time.currentTime < this.time.endTime) {
        //正在进行中
      } else {
        //已结束
        this.time.isEnd = true;
      }
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

  .my-swipe{
    min-height: 100px;
  }

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

      .nickname {
        font-weight: bold;
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
