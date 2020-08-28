<!--已上架-->
<template>
  <div ref="content">
    <div ref="header"></div>
    <List :curr-length="list.length" :total="total" style="height:100%" @getData="getList">
      <div class="card" v-for="item in list">
        <commodity orderType="putaway" :comm="item"></commodity>
      </div>
    </List>
  </div>
</template>

<script>
import commodity from "./compnent/commodity";
import getList from "./mixin/getList";
import {getShopAll} from '@/api/shop'

export default {
  name: "putaway",
  mixins: [getList],
  components: {
    commodity
  },
  methods: {
    getList() {
      return getShopAll({
        shopStat: 0,
        page: this.currPage,
        rows: this.pageSize,
        userId: this.userInfo.userId
      }).then(data => {
        this.currPage++;
        this.list = [...this.list, ...data.shopList.map(item => {
          item.shopLogo = item.shopCover;
          return item;
        })];
        this.total = data.totalCount;
      })
    }
  }
}
</script>

<style scoped lang="scss"></style>
