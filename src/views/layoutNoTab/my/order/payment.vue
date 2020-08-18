<!--付款-->
<template>
  <div ref="content">
    <div ref="header"></div>
    <List :curr-length="list.length" :total="total" style="height:100%" @getData="getList">
      <div class="card" v-for="item in list">
        <commodity :comm="item">
          <van-button type="warning" size="mini" round @click="cancelOrder(item)">取消订单</van-button>
          <van-button type="info" size="mini" round @click="lookOrder(item)">查看订单</van-button>
        </commodity>
      </div>
    </List>
  </div>
</template>

<script>
import commodity from "./compnent/commodity";
import getDataList from "./mixin/getList";
import {orderList, canalOrder} from '@/api/order'
import {Dialog} from "vant";

export default {
  name: "payment",
  mixins: [getDataList],
  components: {
    commodity
  },
  methods: {
    listApi() {
      return orderList({
        orderStat: 0,
        buyer: this.userInfo.userId
      })
    },
    /*查看订单*/
    lookOrder(item) {
      this.$router.push({
        path: '/layoutNoTab/orderDetails',
        query: {
          orderId: item.orderId
        }
      })
    },
    /*取消订单*/
    cancelOrder(item) {
      this.Dialog.confirm({
        title: '您确定取消订单吗？',
      }).then(() => {
        canalOrder({
          orderId: item.orderId
        }).then(data => {
          this.Toast('已取消');
          this.getList(true);
        })
      })
    }
  }
}
</script>

<style scoped lang="scss">

</style>
