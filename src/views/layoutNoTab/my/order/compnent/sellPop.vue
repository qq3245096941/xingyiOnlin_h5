<template>
  <van-popup v-model="isPopShow" position="bottom" @close="close" round closeable>
    <div style="padding: 20px;font-size: 15px">
      <div class="topPrice">
        <p>委托费用：<span style="color: #ff9900">￥{{entrustMoney}}</span></p>
        <p>预计费用：<span style="color: #ff9900">￥{{estimateMoney}}</span></p>
      </div>
      <div style="text-align: center;margin:10px 0">出售价格：<span style="color: #ed4014">￥{{total}}</span></div>
      <div class="hen"></div>
      <paymentComponent></paymentComponent>

      <van-button type="danger" block round style="margin-top: 10px">提交委托申请</van-button>
    </div>
  </van-popup>
</template>

<script>
import {configAll} from '@/api/config'

export default {
  name: "sellPop",
  props: {
    isShow: {
      type: Boolean,
      required: false,
      configList: [], //系统变量
      entrustMoney: 0,  //委托费用
      estimateMoney: 0  //预计费用
    },
    /*商品原价*/
    total: {
      type: Number,
      required: true
    }
  },
  created() {
    configAll().then(data => {
      this.configList = data.data;
    })
  },
  data() {
    return {
      isPopShow: false
    }
  },
  watch: {
    isShow(newValue) {
      this.isPopShow = newValue;
    },
    total(newValue) {
      let proportion = Number.parseFloat(this.configList.find(item => item.code === 'H5_RENEW_ONE').sysValue);

      this.entrustMoney = (newValue * proportion).toFixed(0);
      this.estimateMoney = newValue - this.entrustMoney;

    }
  },
  methods: {
    close() {
      this.$emit('update:isShow', false);
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
