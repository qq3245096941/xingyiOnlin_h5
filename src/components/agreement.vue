<template>
  <van-popup :value="isShow" position="bottom" @close="close" round closeable :close-on-click-overlay="false">
    <div class="box">
      <div class="title">
        购买协议
      </div>
      <div class="body">
        购买协议购买协议购买协议购买协议购买协议购买协议购买协议购买协议购买协议购买协议购买协议购买协议购买协议购买协议购买协议购买协议购
        买协议购买协议购买协议购买协议购买协议购买协议购买协议购买协议购买协议购买协议购买协议购买协议购买协议购买协议购买协议购买协议购
      </div>

      <van-button block type="danger">我已阅读该协议</van-button>
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
  methods: {
    close() {
      this.$emit('update:isShow', false)
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
    padding: 10px;
    font-size: 13px;
  }
}
</style>
