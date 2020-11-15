<template>
  <van-popup v-model="isPopShow" position="bottom" @close="close" round closeable>
    <div class="box">
      <div class="title">
        购买协议
      </div>
      <div class="body">
        <p>尊敬的芸艺富通平台用户;芸艺富通法务部门友情提示:本平台是一个在线艺术品交易平台,提醒广大客户理性消费,禁止使用信用卡网货等信用额度进行消费,在有一定消费实力的前提下合理合法的进行消费,平台禁止刷单,代抢单,代投资。合作抢拍,代付款等行为。
        </p>
        <p>用户盲目的听信和参与以上行为造成的个人财产损失的, 需自行承担责任。</p>
      </div>
      <van-button block type="danger" @click="submitOrder">{{btnText}}</van-button>
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
    },
    btnText: {
      type: String,
      default: '我已阅读该协议'
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
    submitOrder() {
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
    text-indent: 2em
  }
}
</style>
