<!--已上架-->
<template>
  <div ref="content">
    <div ref="header"></div>
    <List :curr-length="list.length" :total="total" style="height:100%" @getData="getList">
      <div class="card" v-for="item in list">
        <commodity :comm="item"></commodity>
      </div>
    </List>
  </div>
</template>

<script>
import commodity from "./compnent/commodity";
import getList from "./mixin/getList";
import {orderList} from '@/api/order'

export default {
  name: "putaway",
  mixins: [getList],
  components: {
    commodity
  },
  methods:{
    listApi(){
      return orderList({
        orderStat:4,
        page:this.currPage,
        rows:this.pageSize,
        userId:this.userInfo.userId
      })
    }
  }
}
</script>

<style scoped lang="scss">

</style>
