<!--主页-->
<template>
  <div>
    <div class="lunbo">
      <img src="../../assets/img/main/lunbo.svg" alt="">
    </div>
    <!--通告栏-->
    <van-notice-bar
        color="#000"
        background="#c5c8ce"
        :left-icon="require('../../assets/img/gonggao.svg')"
        text="这是通告栏。"
        mode="link"/>

    <!--商品区-->
    <div class="shopping">
      <p>热门推荐</p>
      <div class="imgs">
        <img :src="require('../../assets/img/main/tehuiqu.svg')" alt="" @click="goDisTrict">
        <img :src="require('../../assets/img/main/yushiqu.svg')" alt="">
        <img :src="require('../../assets/img/main/shoufaqu.svg')" alt="">
        <img :src="require('../../assets/img/main/gaojiaqu.svg')" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {

    }
  },
  methods:{
    goDisTrict(){
      this.$router.push({
        path:'/layoutNoTab/district'
      })
    }
  }
}
</script>

<style scoped lang="scss">
.lunbo {
  width: 100%;
  padding: 10px;

  img {
    display: block;
    width: 100%;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
  }
}

.shopping {
  padding: 10px;

  .imgs {
    display: flex;
    flex-direction: column;

    img{
      display: block;
      width: 100%;
      margin-top: 10px;
    }
  }
}
</style>
