<!--仓库-->
<template>
  <div ref="content">
    <div ref="header"></div>

    <List :curr-length="list.length" :total="total" style="height:100%" @getData="getList">
      <div class="card" v-for="(item,index) in list" :key="index">
        <commodity :comm="item">
          <van-button v-if="item.orderStats!==4" type="warning" size="small" round @click="sell(item)">委托出售</van-button>
          <van-tag v-else type="warning" >正在审核</van-tag>
          <van-button type="primary" size="small" round @click="applyShipment(item)" style="margin-left: 10px">申请发货</van-button>
        </commodity>
      </div>
    </List>

    <!--弹框-->
    <sellPop :total="clickTotal" :orderId="clickOrderId" :isShow.sync="isShow" @getList="getList(true)"></sellPop>
    <entrust :isShow.sync="isEnterShow" @look="look"></entrust>

  </div>
</template>

<script>
import commodity from "./compnent/commodity";
import getDataList from "./mixin/getList";
import sellPop from "@/views/layoutNoTab/my/order/compnent/sellPop";
import {orderList, upOrderExp} from '@/api/order'
import entrust from "@/components/entrust";

export default {
  name: "warehouse",
  mixins: [getDataList],
  components: {
    commodity, sellPop, entrust
  },
  data() {
    return {
      isShow: false,
      clickTotal: 0,
      clickOrderId: '',
      /*是否同意委托协议*/
      isEnterShow: false
    }
  },
  methods: {
    look(){
      this.isShow = true;
      this.isEnterShow = false;
    },
    sell(item) {
      this.clickTotal = item.sumPrice;
      this.clickOrderId = item.orderId;
      this.isEnterShow = true;
    },
    listApi() {
      return orderList({
        orderStat: 1,
        buyer: this.userInfo.userId,
        page: this.currPage,
        rows: this.pageSize
      })
    },
    /*申请发货*/
    applyShipment(item) {
      this.$router.push({
        path: '/layoutNoTab/addressManager'
      })

      this.$eventBus.$on('getAddress', (addressId) => {
        //申请发货
        upOrderExp({
          orderId: item.orderId,
          addressId
        }).then(data => {
          this.getList(true);
        })
      })
    },
  }
}
</script>

<style scoped lang="scss">

</style>
