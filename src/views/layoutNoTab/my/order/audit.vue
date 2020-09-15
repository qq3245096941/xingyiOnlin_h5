<!--付款-->
<template>
  <div ref="content">
    <div ref="header"></div>
    <List :curr-length="list.length" :total="total" style="height:100%" @getData="getList">
      <div class="card" v-for="(item,index) in list" :key="index">
        <commodity :comm="item"></commodity>
      </div>
    </List>
  </div>
</template>

<script>
import commodity from "./compnent/commodity";
import getDataList from "./mixin/getList";
import {orderList, canalOrder} from '@/api/order'

export default {
  name: "audit",
  mixins: [getDataList],
  components: {
    commodity
  },
  methods: {
    listApi() {
      return orderList({
        orderStat: 4,
        page:this.currPage,
        rows:this.pageSize,
        buyer: this.userInfo.userId
      })
    }
  }
}
</script>

<style scoped lang="scss">

</style>
