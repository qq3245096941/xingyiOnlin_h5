<template>
  <div id="NoTabcontent">
    <myTitle id="noTabMyTitle"></myTitle>
    <div class="container" :style="{'height':bodyHeight+'px'}">
      <router-view/>
    </div>
  </div>
</template>

<script>
import tab from "@/components/tab";
import myTitle from "@/components/myTitle";

export default {
  components: {
    tab,myTitle
  },
  data(){
    return{
      bodyHeight:0
    }
  },
  mounted() {
    let cHeight = document.getElementById('NoTabcontent').offsetHeight;  //总高度
    let tHeight = document.getElementById('noTabMyTitle').offsetHeight;  //标题高度

    this.bodyHeight = cHeight-tHeight;
  }
}
</script>

<style lang="scss" scoped>
#NoTabcontent {
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
