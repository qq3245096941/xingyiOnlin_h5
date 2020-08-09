<!--仓库-->
<template>
  <div ref="content">
    <div ref="header"></div>
    <List :curr-length="list.length" :total="total" :style="{height:listHeight}" @getData="getList">
      <div class="card" v-for="item in list">
        <commodity :comm="item">
          <van-button type="warning" size="mini" round>委托出售</van-button>
          <van-button type="primary" size="mini" round>申请发货</van-button>
        </commodity>
      </div>
    </List>
  </div>
</template>

<script>
import commodity from "./compnent/commodity";
import getList from "./mixin/getList";

export default {
  name: "warehouse",
  mixins: [getList],
  components: {
    commodity
  },
}
</script>

<style scoped lang="scss">

</style>
