<!--发货订单-->
<template>
  <div ref="content">
    <div ref="header"></div>

    <List :total="total" :curr-length="list.length" @getData="getList">
      <commodity class="card" v-for="item in list" :comm="item"></commodity>
    </List>
  </div>
</template>

<script>
import getList from "@/views/layoutNoTab/my/order/mixin/getList";
import commodity from "@/views/layoutNoTab/my/order/compnent/commodity";

export default {
  name: "deliverOrder",
  mixins:[getList],
  components:{
    commodity
  },
  methods:{

  }
}
</script>

<style scoped>

</style>
