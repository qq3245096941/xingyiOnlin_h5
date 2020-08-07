<template>
  <div class="content">
    <van-nav-bar z-index="1000" :title="$route.meta.title" style="background: #ffffff00" left-arrow/>

    <div class="container">
      <router-view/>
    </div>

    <tab></tab>
  </div>
</template>

<script>
import tab from "@/components/tab";

export default {
  components: {
    tab
  }
}
</script>

<style lang="scss" scoped>
.content {
  position: absolute;
  width: 100%;
  height: 100%;

  .container {
    background: #f8f8f9;
    height: 88%;
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
  }
}
</style>
