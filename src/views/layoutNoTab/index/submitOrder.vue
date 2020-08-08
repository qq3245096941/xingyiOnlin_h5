<template>
  <div class="content">
    <div class="commodityMessage">
      <div class="commodity">
        <div class="imgBox"></div>
        <ul class="message">
          <li><span class="title">编号：</span>特惠区</li>
          <li><span class="title">售价：</span><span class="price">￥00.00</span></li>
        </ul>
      </div>

      <van-divider/>

      <div class="userMessage">
        <p><span class="title">卖家昵称：</span><span class="userInfo">张三</span></p>
        <p><span class="title">卖家电话：</span><span class="userInfo">15623554858</span></p>
        <van-divider/>
        <p><span class="title">订单小计：</span><span class="userInfo price">￥00.00</span></p>
      </div>
    </div>

    <!--公告-->
    <div class="notice" v-if="isPreparePay===false">
      <p>公告</p>
      <p>请务必阅读并理解本协议</p>
      <p>
        请务必阅读并理解本协议请务必阅读并理解本协议请务必阅读并理解本协议请务必阅读并理解本协议请务必阅读并理解本协议请务必阅读并理解本协议
        请务必阅读并理解本协议请务必阅读并理解本协议请务必阅读并理解本协议请务必阅读并理解本协议请务必阅读并理解本协议请务必阅读并理解本协议
        请务必阅读并理解本协议请务必阅读并理解本协议请务必阅读并理解本协议请务必阅读并理解本协议请务必阅读并理解本协议请务必阅读并理解本协议
        请务必阅读并理解本协议请务必阅读并理解本协议请务必阅读并理解本协议请务必阅读并理解本协议请务必阅读并理解本协议请务必阅读并理解本协议
        请务必阅读并理解本协议请务必阅读并理解本协议请务必阅读并理解本协议请务必阅读并理解本协议请务必阅读并理解本协议请务必阅读并理解本协议
        请务必阅读并理解本协议请务必阅读并理解本协议请务必阅读并理解本协议请务必阅读并理解本协议请务必阅读并理解本协议请务必阅读并理解本协议
      </p>
    </div>

    <!--支付情况-->
    <div v-else class="pay">
      <van-tabs>
        <van-tab title="微信">微信</van-tab>
        <van-tab title="支付宝">支付宝</van-tab>
        <van-tab title="银行卡">银行卡</van-tab>
      </van-tabs>
    </div>

    <van-button v-show="isPreparePay===false" style="position: sticky;bottom: 0" block type="danger" @click="submitOrder">提交订单</van-button>

    <agreement :is-show.sync="isShow" @look="look"></agreement>
  </div>
</template>

<script>
export default {
  name: "submitOrder",
  data(){
    return{
      isShow:false,
      isPreparePay:false, //是否准备开始支付
    }
  },
  methods:{
    submitOrder(){
      this.isShow = true;
    },
    /*已经查看完毕*/
    look(){
      this.isShow = false;
      this.isPreparePay = true;
    }
  }
}
</script>

<style scoped lang="scss">

.content {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: auto;

  .title {
    font-weight: bold;
  }

  .price {
    color: #ed4014;
    font-weight: bold;
  }

  .commodityMessage {
    padding: 13px;
    border-radius: 5px;
    margin: 10px;
    background: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);

    .commodity {
      display: flex;
      align-items: center;

      .imgBox {
        flex: 1;
        border-radius: 10px;
        width: 120px;
        height: 80px;
        background: red;
      }

      .message {
        flex: 1;
        margin-left: 10px;
      }
    }
  }

  .userMessage {
    .userInfo {
      float: right;
    }
  }

  .notice {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
  }

  .pay{
    overflow: hidden;
    margin: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    border-radius: 5px;
  }
}
</style>
