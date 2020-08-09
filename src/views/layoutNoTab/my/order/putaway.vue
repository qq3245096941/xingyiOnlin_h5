<!--卖出-->
<template>
  <div ref="content">
    <div ref="header"></div>
    <List :curr-length="list.length" :total="total" :style="{height:listHeight}" @getData="getList">
      <div class="card" v-for="item in list">
        <commodity :comm="item"></commodity>
      </div>
    </List>
  </div>
</template>

<script>
import commodity from "./compnent/commodity";
import getList from "./mixin/getList";

export default {
  name: "putaway",
  mixins: [getList],
  components: {
    commodity
  },
}
</script>

<style scoped lang="scss">

</style>
