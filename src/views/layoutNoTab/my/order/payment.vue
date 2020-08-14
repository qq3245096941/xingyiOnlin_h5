<!--付款-->
<template>
  <div ref="content">
    <div ref="header"></div>
    <List :curr-length="list.length" :total="total" style="height:100%" @getData="getList">
      <div class="card" v-for="item in list">
        <commodity :comm="item">
          <van-button type="warning" size="mini" round>取消订单</van-button>
          <van-button type="info" size="mini" round>查看订单</van-button>
        </commodity>
      </div>
    </List>
  </div>
</template>

<script>
import commodity from "./compnent/commodity";
import getDataList from "./mixin/getList";
import {orderList} from '@/api/order'

export default {
  name: "payment",
  mixins: [getDataList],
  components: {
    commodity
  },
  methods:{
    getList(){
      orderList({
        orderStat:0,

      })
    }
  }
}
</script>

<style scoped lang="scss">

</style>
