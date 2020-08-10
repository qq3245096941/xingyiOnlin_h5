<!--收款-->
<template>
  <div ref="content">
    <div ref="header"></div>
    <List :curr-length="list.length" :total="total" style="height: 100%" @getData="getList">
      <div class="card" v-for="item in list">
        <commodity :comm="item">

          <template #default>
            <div style="display: flex;align-items: center;">
              <div>
                <van-button type="primary" size="mini" round>确认收款</van-button>
              </div>
              <div style="font-size: 13px;flex: 1;text-align: right">甲乙丙&nbsp;&nbsp;15623554858</div>
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
  name: "gathering",
  mixins: [getList],
  components: {
    commodity
  },
}
</script>

<style scoped lang="scss">
  .commBody{

  }
</style>
