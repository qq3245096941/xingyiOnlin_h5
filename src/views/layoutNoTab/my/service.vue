<template>
  <div class="content">
    <img :src="url" alt="">
  </div>
</template>

<script>
import {configInfo} from '@/api/config'

export default {
  name: "service",
  data(){
    return{
      url:''
    }
  },
  created () {
    configInfo({
      code:'CUSTOMER_CODE'
    }).then(data=>{
      this.url = data.data.sysValue;
    })
  }
}
</script>

<style scoped lang="scss">
.content {
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    display: block;
    margin: 0 auto;

  }
}


</style>
