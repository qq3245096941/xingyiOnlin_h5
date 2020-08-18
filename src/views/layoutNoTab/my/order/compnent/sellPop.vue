<template>
  <van-popup v-model="isPopShow" position="bottom" @close="close" round closeable>
    <div style="padding: 20px;font-size: 15px">
      <div class="topPrice">
        <p>委托费用：<span style="color: #ff9900">￥{{entrustMoney}}</span></p>
        <p>预计费用：<span style="color: #ff9900">￥{{estimateMoney}}</span></p>
      </div>
      <div style="text-align: center;margin:10px 0">出售价格：<span style="color: #ed4014">￥{{tradingValue}}</span></div>
      <div class="hen"></div>
      <paymentComponent :user-id="10086"></paymentComponent>

      <van-button type="danger" block round style="margin-top: 10px" @click="submit">提交委托申请</van-button>
    </div>
  </van-popup>
</template>

<script>
import {configAll} from '@/api/config'
import {upOrderShelf} from '@/api/order'

export default {
  name: "sellPop",
  props: {
    isShow: {
      type: Boolean,
      required: false,

    },
    /*商品原价*/
    total: {
      type: Number,
      required: true
    },
    orderId:{
      type:String,
      required:true
    }
  },
  created() {
    configAll().then(data => {
      this.configList = data.data;
    })
  },
  data() {
    return {
      isPopShow: false,
      configList: [], //系统变量
      entrustMoney: 0,  //委托费用
      estimateMoney: 0,  //预计费用
      tradingValue: 0  //出售价格
    }
  },
  watch: {
    isShow(newValue) {
      this.isPopShow = newValue;
    },
    total(newValue) {
      this.entrustMoney = (newValue * Number.parseFloat(this.configList.find(item => item.code === 'H5_RENEW_ONE').sysValue)).toFixed(0);  //委托费用
      this.estimateMoney = (newValue * Number.parseFloat(this.configList.find(item => item.code === 'H5_RENEW_TWO').sysValue)).toFixed(0);  //佣金比例
      this.tradingValue = Number(this.entrustMoney) + Number(this.estimateMoney) + Number(newValue);
    }
  },
  methods: {
    close() {
      this.$emit('update:isShow', false);
    },
    submit(){
      upOrderShelf({
        orderId:this.orderId
      }).then(data=>{
        this.Toast('提交成功');
        this.$emit('getList');
        this.close();
      })
    }
  }
}
</script>

<style scoped lang="scss">
.topPrice {
  display: flex;
  align-content: center;

  p {
    flex: 1;
    text-align: center;
  }
}
</style>
