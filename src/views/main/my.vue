<template>
  <div class="content">
    <div class="userInfo">
      <img class="back" src="../../assets/img/my/back.svg" alt="">

      <div class="user">
        <van-image width="60" round height="60" :src="require('../../assets/img/my/avatar.jpg')"/>
        <p class="nickname">追风的牧羊人</p>
      </div>
    </div>

    <div class="orderTab">
      <div class="order">
        <img class="icon" src="../../assets/img/my/orderList/quanbudingdan.svg" alt="">
        <p class="title">全部订单</p>
      </div>
      <div class="order">
        <img class="icon" src="../../assets/img/my/orderList/fahuodingdan.svg" alt="">
        <p class="title">支付确认</p>
      </div>
      <div class="order">
        <img class="icon" src="../../assets/img/my/orderList/shoukuanqueren.svg" alt="">
        <p class="title">收款确认</p>
      </div>
      <div class="order">
        <img class="icon" src="../../assets/img/my/orderList/fahuodingdan.svg" alt="">
        <p class="title">发货订单</p>
      </div>
    </div>

    <div class="orderTab">
      <div class="order">
        <img class="icon" src="../../assets/img/my/fans/wodeqianbao.svg" alt="">
        <p class="title">我的钱包</p>
      </div>
      <div class="order">
        <img class="icon" src="../../assets/img/my/fans/fensidingdan.svg" alt="">
        <p class="title">粉丝订单</p>
      </div>
      <div class="order">
        <img class="icon" src="../../assets/img/my/fans/wodefensi.svg" alt="">
        <p class="title">我的粉丝</p>
      </div>
      <div class="order">
        <img class="icon" src="../../assets/img/my/fans/wodetuiguang.svg" alt="">
        <p class="title">我的推广</p>
      </div>
    </div>

    <van-cell-group class="people">
      <van-cell icon="location-o" title="收款中心"  is-link/>
      <van-cell icon="location-o" title="我的地址" is-link/>
      <van-cell icon="location-o" title="客服中心" to="/layoutNoTab/service" is-link/>
      <van-cell icon="location-o" title="个人中心" is-link/>
    </van-cell-group>

    <div class="btn">
      <van-button block type="danger" round>登录/注册</van-button>
    </div>

  </div>
</template>


<script>
export default {
  name: "my"
}
</script>

<style scoped lang="scss">
.content {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;

  .userInfo {
    .back {
      display: block;
      width: 100%;
    }

    .user {
      top: 100px;
      width: 100%;
      position: absolute;
      z-index: 100;
      display: flex;
      align-items: center;
      flex-direction: column;
      flex: 1;

      .nickname {
        margin: 5px;
        font-weight: bold;
      }
    }
  }

  .orderTab {
    padding: 10px 5px 5px 5px;
    margin: 10px;
    display: flex;
    align-items: center;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);

    .order {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;

      .title {
        margin: 5px;
        font-size: 12px;
      }
    }
  }

  .people {
    margin: 10px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  }

  .btn{
    margin: 0 50px 60px 50px;
  }
}
</style>
