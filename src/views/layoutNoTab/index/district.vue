<!--特惠区等-->
<template>
  <div class="content" ref="content">
    <div ref="header">
      <p class="time">开启时间：{{commdityTypeInfo.openDate}} ~ {{commdityTypeInfo.closeDate}}</p>
      <p class="title" style="text-align: center">{{commdityTypeInfo.name}}</p>
      <van-pagination v-model="currPage" class="page" :total-items="total" :items-per-page="20" @change="pageChange"/>
    </div>

    <div :style="{height: this.listHeight}" style="overflow: auto">

      <div class="commodityBox" >
        <div class="commodity" v-for="(item,index) in list" :key="index" @click="toCommodityDetails(item)">
          <img v-show="item.shopStat==='1'" class="isNo" src="../../../assets/img/main/yishouqin2.svg" alt="">
          <img class="img" :src="imgPrefixUrl+item.shopCover" alt="">
          <p class="price">￥{{item.shopPrice}}</p>
          <p class="commodityName">{{item.shopName}}</p>
        </div>
      </div>

      <van-empty v-show="total===0" description="暂无商品"/>
    </div>

  </div>
</template>

<script>
import page from "@/mixin/page";
import {getShopAll} from '@/api/shop'
import {typeInfo} from '@/api/type'

export default {
  name: "district",
  mixins: [page],
  data() {
    return {
      commdityTypeInfo: {}
    }
  },
  created() {
    this.total = 5;
    this.getList();
  },
  methods: {
    pageChange(res){
      this.currPage = res;
      this.getList();
    },
    toCommodityDetails(item) {
      if(item.shopStat==='1'){
        this.Toast('已售完');
        return;
      }

      this.$router.push({
        path: '/layoutNoTab/commodityDetails',
        query: {
          shopId: item.shopId
        }
      })
    },
    getList() {
      getShopAll({
        commdityType: this.$route.query.commdityType,
        page: this.currPage,
        rows: 20
      }).then(data => {
        this.total = data.totalCount;
        this.list = data.shopList;
      })
    }
  },
  mounted() {
    typeInfo({
      commdityTypeId: this.$route.query.commdityType
    }).then(data => {
      this.commdityTypeInfo = data.data;
    })
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
    flex-wrap: wrap;
    padding-bottom: 20px;

    .commodity {
      overflow: hidden;
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
        height: 100px;
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
