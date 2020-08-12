<template>
  <div class="protocolBox">
    <div class="protocol" v-for="(item,index) in list" :key="index">
      <p>{{item.title}}</p>
      <p>{{item.time}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "protocol",
  data(){
    return{
      list:[]
    }
  },
  mounted() {
    this.list = Array.from({length: 20}).map(() => {
      return {
        time: '2020-01-01 11:11:11',
        title: '用户注册协议'
      }
    })
  }
}
</script>

<style scoped>

</style>
