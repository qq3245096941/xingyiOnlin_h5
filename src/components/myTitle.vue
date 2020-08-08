<template>
  <van-nav-bar class="title" :title="$route.meta.title" left-arrow @click-left="clickLeft"/>
</template>

<script>
export default {
  name: "myTitle",
  methods: {
    clickLeft() {
      this.$router.go(-1);
    }
  }
}
</script>

<style scoped>
.title {
  background: #ffffff00;
}

[class*=van-hairline]::after{
  border: none;
}
</style>
