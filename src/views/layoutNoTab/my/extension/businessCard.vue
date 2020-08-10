<template>
  <div class="content">
    <img :src="haibao" alt="">
  </div>
</template>

<script>
import businessCard from "@/static/img/businessCard.png"

export default {
  name: "businessCard",
  data(){
    return{
      haibao:businessCard
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
