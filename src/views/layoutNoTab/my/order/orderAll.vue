<!--全部订单-->
<template>
  <van-tabs v-model="active" sticky>
    <van-tab title="仓库">
      <warehouse></warehouse>
    </van-tab>
    <van-tab title="付款">
      <payment></payment>
    </van-tab>
    <van-tab title="收款">
      <gathering></gathering>
    </van-tab>
    <van-tab title="卖出">
      <sale></sale>
    </van-tab>
    <van-tab title="已上架">
      <putaway></putaway>
    </van-tab>
  </van-tabs>
</template>

<script>
import warehouse from "@/views/layoutNoTab/my/order/warehouse";  //仓库
import payment from "@/views/layoutNoTab/my/order/payment";  //付款
import gathering from "@/views/layoutNoTab/my/order/gathering";//收款
import sale from "@/views/layoutNoTab/my/order/sale";  //卖出
import putaway from "@/views/layoutNoTab/my/order/putaway";  //已上架


export default {
  name: "order",
  components: {
    warehouse, payment, gathering, sale, putaway
  },
  data() {
    return {
      active: 0
    }
  },
  created() {
    this.active = this.$route.query.index ? Number.parseInt(this.$route.query.index) : '';
  }
}
</script>

<style scoped>

</style>
