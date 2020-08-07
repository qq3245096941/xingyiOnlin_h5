<template>
  <van-tabbar v-model="value" route>
    <van-tabbar-item to="/layout/main" name="main">
      <span>首页</span>
      <template #icon="props">
        <img :src="props.active ? require('../assets/img/tabIcon/shouye2.svg') : require('../assets/img/tabIcon/shouye1.svg')" />
      </template>
    </van-tabbar-item>
    <van-tabbar-item to="/layout/notice" name="notice" icon="search">
      <span>公告</span>
      <template #icon="props">
        <img :src="props.active ? require('../assets/img/tabIcon/gonggao2.svg') : require('../assets/img/tabIcon/gonggao1.svg')" />
      </template>
    </van-tabbar-item>
    <van-tabbar-item to="/layout/my" name="my" icon="setting-o">
      <span>我的</span>
      <template #icon="props">
        <img :src="props.active ? require('../assets/img/tabIcon/wode2.svg') : require('../assets/img/tabIcon/gonggao2.svg')" />
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  name: "tab",
  data() {
    return {
      value:''
    }
  },
  methods: {
    change(res){
      console.log(res);
    }
  },
  mounted() {

  }
}
</script>

<style scoped lang="scss">

</style>
