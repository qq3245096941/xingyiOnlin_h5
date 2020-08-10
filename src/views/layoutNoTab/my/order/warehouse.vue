<!--仓库-->
<template>
  <div ref="content">
    <div ref="header"></div>
    <List :curr-length="list.length" :total="total" style="height:100%" @getData="getList">
      <div class="card" v-for="item in list">
        <commodity :comm="item">
          <van-button type="warning" size="mini" round @click="sell">委托出售</van-button>
          <van-button type="primary" size="mini" round>申请发货</van-button>
        </commodity>
      </div>
    </List>

    <!--弹框-->
    <sellPop :isShow.sync="isShow"></sellPop>

  </div>
</template>

<script>
import commodity from "./compnent/commodity";
import getList from "./mixin/getList";
import sellPop from "@/views/layoutNoTab/my/order/compnent/sellPop";

export default {
  name: "warehouse",
  mixins: [getList],
  components: {
    commodity,sellPop
  },
  data(){
    return{
      isShow:false
    }
  },
  methods:{
    sell(){
      this.isShow = true;
    }
  }
}
</script>

<style scoped lang="scss">

</style>
