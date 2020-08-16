<template>
  <div class="content">
    <div class="commodityMessage">
      <div class="commodity">
        <div class="imgBox">
          <img style="width: 100%;height: 100%" :src="imgPrefixUrl+shop.shopCover.split(',')[0]" alt="">
        </div>
        <ul class="message">
          <li><span class="title">名称：</span>{{shop.shopName}}</li>
          <li><span class="title">编号：</span>{{shop.typeName}}</li>
          <li><span class="title">售价：</span><span class="price">￥{{shop.shopPrice}}</span></li>
        </ul>
      </div>

      <van-divider/>

      <div class="userMessage">
        <p><span class="title">卖家昵称：</span><span class="userInfo">{{shop.userName}}</span></p>
        <p><span class="title">卖家电话：</span><span class="userInfo">{{shop.userTel}}</span></p>
        <van-divider/>
        <p><span class="title">订单小计：</span><span class="userInfo price">￥{{shop.shopPrice}}</span></p>
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
    </div>

    <van-button style="position: sticky;bottom: 0" block type="danger" @click="submitOrder">提交订单</van-button>

    <agreement :is-show.sync="isShow" @look="look"></agreement>
  </div>
</template>

<script>
import {shopInfo} from '@/api/shop'
import {addOrder} from '@/api/order'

export default {
  name: "submitOrder",
  data(){
    return{
      isShow:false,
      shop:{}
    }
  },
  created() {
    shopInfo({
      shopId:this.$route.query.shopId
    }).then(data=>{
      this.shop = data.data;
    })
  },
  methods:{
    submitOrder(){
      this.isShow = true;
    },
    /*已经查看完毕*/
    look(){
      this.isShow = false;
      /*调取添加订单接口*/
      addOrder({
        shopId:this.$route.query.shopId,
        buyer:this.userInfo.userId,
        sumPrice:this.shop.shopPrice
      }).then(data=>{

        if(data.code==='4'){
          this.Toast(data.message);
        }else{
          this.$router.replace({
            path:'/layoutNoTab/orderDetails',
            query:{
              orderId:data.data
            }
          })
        }
      })
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
        overflow: hidden;
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
