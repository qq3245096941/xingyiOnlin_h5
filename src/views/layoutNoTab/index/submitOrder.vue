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
    <div class="notice">
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
      <van-button style="position: sticky;bottom: 0" block round type="danger">提交订单</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "submitOrder"
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

}
</style>
