<!--特惠区等-->
<template>
  <div>
    <p class="time">开启时间：10:00:00 ~ 11:00:00</p>
    <p class="title" style="text-align: center">特惠区</p>
    <van-pagination class="page" :total-items="24" :items-per-page="5"/>

    <div class="commodityBox">
      <div class="commodity" v-for="(item,index) in list" :key="index" @click="toCommodityDetails">
        <img class="isNo" src="../../../assets/img/main/yishouqin2.svg" alt="">
        <img class="img" src="../../../assets/img/main/chanpintu.svg" alt="">
        <p class="price">￥{{item.price}}</p>
        <p class="commodityName">{{item.commodityName}}</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "district",
  data(){
    return{
      list:[]
    }
  },
  created() {
    this.list = Array.from({length:30}).map(item=>{
      return {
        price:'1.00',
        commodityName:'红木家具鸡翅木...',
        isNo:true
      }
    })
  },
  methods:{
    toCommodityDetails(){
      this.$router.push({
        path:'/layoutNoTab/commodityDetails'
      })
    }
  }
}
</script>

<style scoped lang="scss">
.commodityBox{
  display: flex;
  width: 100%;
  flex-wrap: wrap;

  .commodity{
    position: relative;
    border-radius: 10px;
    margin: 10px 0 0 10px;
    width: 45%;
    display: flex;
    align-items: center;
    flex-direction: column;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);

    .price{
      margin: 5px 0 0 0;
      color: #ed4014;
      font-weight: bold;
    }

    .commodityName{
      font-size: 13px;
      margin: 5px 0 5px 0;
    }

    .isNo{
      top: 40px;
      position: absolute;
      width: 100%;
    }

    .img{
      width: 100%;
      display: block;
    }
  }

}

.page{
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
</style>
