<template>
  <div id="tabContent">
    <myTitle id="tabMyTitle"></myTitle>

    <div class="container" :style="{'height':bodyHeight+'px'}">
      <router-view/>
    </div>

    <tab id="footer"></tab>
  </div>
</template>

<script>
import tab from "@/components/tab"
import myTitle from "@/components/myTitle";

export default {
  components: {
    tab, myTitle
  },
  data() {
    return {
      bodyHeight: 0,
    }
  },
  mounted() {
    let cHeight = document.getElementById('tabContent').offsetHeight;  //总高度
    let tHeight = document.getElementById('tabMyTitle').offsetHeight;  //标题高度
    let fHeight = document.getElementById('footer').offsetHeight;

    console.log(fHeight)

    this.bodyHeight = cHeight - tHeight - fHeight;
  }
}
</script>

<style lang="scss" scoped>
#tabContent {
  position: absolute;
  width: 100%;
  height: 100%;

  .container {
    background: #f8f8f9;
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
  }
}
</style>
