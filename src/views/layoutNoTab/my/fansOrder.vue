<!--粉丝订单-->
<template>
  <div ref="content" class="content">
    <div ref="header">
      <img class="back" :src="require('@/static/img/redBack.png')" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "fansOrder",
  mounted() {

  },
  methods:{
    getList(){

    }
  }
}
</script>

<style scoped lang="scss">
.content {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;

  .back {
    display: block;
    width: 100%;
  }
}
</style>
