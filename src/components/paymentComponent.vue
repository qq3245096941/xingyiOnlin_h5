<template>
  <van-tabs>
    <van-tab v-for="item in list" :title="item.payName">

      <van-cell-group v-if="item.payType==='2'">
        <van-cell title="姓名" :value="item.realName"/>
        <van-cell title="手机号" :value="item.userTel"/>
        <van-cell title="银行卡" :value="item.bankCode"/>
        <van-cell title="开户行" :value="item.bankDeposit"/>
      </van-cell-group>

      <img v-else :src="imgPrefixUrl+item.payUrl" alt="">
    </van-tab>
  </van-tabs>
</template>

<script>
import {payList} from "@/api/pay";

export default {
  name: "payment",
  components: {},
  props: {
    userId: {
      default: ''
    }
  },
  data() {
    return {
      list: []
    }
  },
  created() {
    payList({userId: this.userId ? this.userId : this.userInfo.userId}).then(data => {
      this.list = data.data;
    })
  }
}
</script>

<style scoped>
img {
  display: block;
  width: 100%;
}
</style>
