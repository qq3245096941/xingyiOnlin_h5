<!--收款-->
<template>
  <div ref="content">
    <div ref="header"></div>

    <List :curr-length="list.length" :total="total" style="height: 100%" @getData="getList">
      <div class="card" v-for="(item,index) in list" :key="index">
        <commodity :comm="item">
          <template #default>
            <div style="display: flex;align-items: center;">
              <div>
                <van-button type="primary" size="mini" round @click="confirmReceipt(item)">确认收款</van-button>
              </div>
              <div
                style="font-size: 13px;flex: 1;text-align: right"
              >{{item.buyerName}}&nbsp;&nbsp;{{item.buyerTel}}</div>
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
import { orderList, confimReceipt } from "@/api/order";

export default {
  name: "gathering",
  mixins: [getList],
  components: {
    commodity,
  },
  methods: {
    listApi() {
      return orderList({
        orderStat: 0,
        userId: this.userInfo.userId,
        page: this.currPage,
        rows: this.pageSize,
      });
    },
    confirmReceipt(item) {
      this.Dialog.confirm({
        title: "确认收款吗？",
      }).then(() => {
        confimReceipt({
          orderId: item.orderId,
        }).then((data) => {
          this.Toast("收款成功");
          this.getList(true);
        });
      });
    },
  },
};
</script>

<style scoped lang="scss">
</style>
