<template>
  <van-tabs>
    <van-tab v-for="item in list" :title="item.payName">
      <img :src="imgPrefixUrl+item.payUrl" alt="">
    </van-tab>
  </van-tabs>
</template>

<script>
import {payList} from "@/api/pay";

export default {
  name: "payment",
  data() {
    return {
      list: []
    }
  },
  created() {
    payList({userId: this.userInfo.userId}).then(data => {
      this.list = data.data;
    })
  }
}
</script>

<style scoped>
  img{
    display: block;
    width: 100%;
  }
</style>
