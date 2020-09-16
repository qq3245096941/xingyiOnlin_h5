<template>
  <div>
    <van-tabs>
      <van-tab v-for="(item,index) in list" :key="index" :title="item.payName">
        <van-cell-group v-if="item.payType==='2'">
          <van-cell title="姓名" :value="item.realName" />
          <van-cell title="手机号" :value="item.userTel" />
          <van-cell title="银行卡" :value="item.bankCode" />
          <van-cell title="开户行" :value="item.bankDeposit" />
        </van-cell-group>
        <img v-else :src="imgPrefixUrl+item.payUrl" alt />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { payList, shopPays, typePays } from "@/api/pay";

export default {
  name: "payment",
  components: {},
  props: {
    userId: {
      default: "",
    },
    shopId: {
      type: Number,
    },
    commdityType: {
      type: String,
    },
  },
  data() {
    return {
      list: [],
    };
  },
  watch: {
    userId(newValue) {
      if (newValue === 10086) {
        this.commodityPayList();
      } else {
        this.getList();
      }
    },
  },
  methods: {
    getList() {
      payList({
        userId: this.userId ? this.userId : this.userInfo.userId,
      }).then((data) => {
        this.list = data.data;
      });
    },
    //商品收款码
    commodityPayList() {
      shopPays({
        shopId: this.shopId,
      }).then((data) => {
        this.list = data.data;
      });
    },
  },
  mounted() {
    if (this.commdityType) {
      typePays({
        commdityType: this.commdityType,
        page: 1,
        rows: 9999,
      }).then((data) => {
        this.list = data.list;
      });
    }
  },
};
</script>

<style scoped>
img {
  display: block;
  width: 100%;
}
</style>
