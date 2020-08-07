<template>
  <van-popup v-model="isPopShow" position="bottom" @close="close" round closeable>
    <div class="box">
      <div class="title">
        购买协议
      </div>
      <div class="body">
        购买协议购买协议购买协议购买协议购买协议购买协议购买协议购买协议购买协议购买协议购买协议购买协议购买协议购买协议购买协议购买协议购
        买协议购买协议购买协议购买协议购买协议购买协议购买协议购买协议购买协议购买协议购买协议购买协议购买协议购买协议购买协议购买协议购
      </div>

      <van-button block type="danger" @click="submitOrder">我已阅读该协议</van-button>
    </div>
  </van-popup>
</template>

<script>
export default {
  name: "agreement",
  props: {
    isShow: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isPopShow: false
    }
  },
  watch: {
    isShow(newValue) {
      this.isPopShow = newValue;
    }
  },
  methods: {
    close() {
      this.isPopShow = false;
      this.$emit('update:isShow', false)
    },
    /*提交订单*/
    submitOrder(){
      this.$emit('look');
    }
  }
}
</script>

<style scoped lang="scss">

.box {
  .title {
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    color: #000;
    margin: 20px;
  }

  .body {
    padding: 0 20px 40px 20px;
    font-size: 13px;
  }
}
</style>
