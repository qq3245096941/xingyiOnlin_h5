<!--卖出-->
<template>
  <div ref="content">
    <div ref="header"></div>
    <List :curr-length="list.length" :total="total" style="height:100%" @getData="getList">
      <div class="card" v-for="item in list">
        <commodity :comm="item">

          <template #default>
            <div style="display: flex;align-items: center">
              <div>
                <van-tag type="success">已成功售出</van-tag>
              </div>
              <div style="font-size: 13px;flex: 1;text-align: right">15623554858</div>
            </div>
          </template>

        </commodity>
      </div>
    </List>
  </div>
</template>

<script>
import commodity from "./compnent/commodity";
import getList from "./mixin/getList";

export default {
  name: "sale",
  mixins: [getList],
  components: {
    commodity
  },
}
</script>

<style scoped lang="scss">

</style>
