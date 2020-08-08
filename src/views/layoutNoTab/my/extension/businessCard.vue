<template>
  <div class="content">
    <img :src="haibao" alt="">
  </div>
</template>

<script>
import fenxianghaibao from "@/assets/img/fenxianghaibao.svg"

export default {
  name: "businessCard",
  data(){
    return{
      haibao:fenxianghaibao
    }
  }
}
</script>

<style scoped lang="scss">
  .content{
    width: 100%;
    height: 100%;

    img{
      display: block;
      width: 100%;
    }

  }
</style>
