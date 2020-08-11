<template>
  <div class="content">
    <img :src="require('@/assets/img/my/serve.jpg')" alt="">
  </div>
</template>

<script>
export default {
  name: "service"
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
