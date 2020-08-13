<!--特惠区等-->
<template>
  <div class="content" ref="content">
    <div ref="header">
      <p class="time">开启时间：10:00:00 ~ 11:00:00</p>
      <p class="title" style="text-align: center">特惠区</p>
      <van-pagination class="page" :total-items="24" :items-per-page="5"/>
    </div>

    <List :style="{height: this.listHeight}" @getData="getList" :total="total"
          :curr-length="list.length">

      <div class="commodityBox">
        <div class="commodity" v-for="(item,index) in list" :key="index" @click="toCommodityDetails(item)">
          <img class="isNo" src="../../../assets/img/main/yishouqin2.svg" alt="">
          <img class="img" src="../../../assets/img/main/chanpintu.svg" alt="">
          <p class="price">￥{{item.shopPrice}}</p>
          <p class="commodityName">{{item.shopName}}</p>
        </div>
      </div>

    </List>
  </div>
</template>

<script>
import page from "@/mixin/page";
import {getShopAll} from '@/api/shop'

export default {
  name: "district",
  mixins: [page],
  data() {
    return {
      list: []
    }
  },
  methods: {
    toCommodityDetails(item) {
      this.$router.push({
        path: '/layoutNoTab/commodityDetails',
        query: {
          shopId:item.shopId
        }
      })
    },
    getList() {
      getShopAll({
        commdityType: this.$route.query.commdityType,
        page: this.currPage,
        rows: this.pageSize
      }).then(data => {
        this.currPage++;

        this.total = data.totalCount;
        this.list = [...this.list, ...data.shopList];
      })
    }
  }
}
</script>

<style scoped lang="scss">

.content {
  position: relative;
  width: 100%;
  height: 100%;

  .commodityBox {
    display: flex;
    width: 100%;
    flex-wrap: wrap;

    .commodity {
      position: relative;
      border-radius: 10px;
      margin: 10px 0 0 10px;
      width: 45%;
      display: flex;
      align-items: center;
      flex-direction: column;
      box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);

      .price {
        margin: 5px 0 0 0;
        color: #ed4014;
        font-weight: bold;
      }

      .commodityName {
        font-size: 13px;
        margin: 5px 0 5px 0;
      }

      .isNo {
        top: 40px;
        position: absolute;
        width: 100%;
      }

      .img {
        width: 100%;
        display: block;
      }
    }

  }

  .page {
    position: sticky;
    top: 0;
    z-index: 1000;
  }

  .time {
    padding: 10px;
    margin: 0;
    font-size: 12px;
  }

  .title {
    margin: 0;
    font-size: 18px;
    font-weight: bold;
    padding: 10px;
  }
}
</style>
