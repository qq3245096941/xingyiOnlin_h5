<!--发货订单-->
<template>
  <div ref="content">
    <div ref="header"></div>

    <List :total="total" :curr-length="list.length" @getData="getList">
      <commodity class="card" v-for="(item,index) in list" :comm="item" :key="index">
        <p>快递单号：{{item.expNumber}}</p>
        <p>快递公司：{{item.expCompany}}</p>
        <p>{{item.createDate}}</p>

      </commodity>

    </List>
  </div>
</template>

<script>
import getList from "@/views/layoutNoTab/my/order/mixin/getList";
import commodity from "@/views/layoutNoTab/my/order/compnent/commodity";
import {orderList} from '@/api/order'

export default {
  name: "deliverOrder",
  mixins:[getList],
  components:{
    commodity
  },
  methods:{
    listApi(){
      return orderList({
        orderStat:3,
        page:this.currPage,
        rows:this.pageSize,
        buyer:this.userInfo.userId
      })
    }
  }
}
</script>

<style scoped>
  .card p{
    font-size: 13px;
    margin-top: 10px;
  }
</style>
