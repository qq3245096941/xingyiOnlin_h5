<template>
  <van-nav-bar
      class="title"
      :title="$route.meta.title" left-arrow @click-left="clickLeft"
  />
</template>

<script>
export default {
  name: "myTitle",
  methods: {
    clickLeft() {
      this.$router.go(-1);
    }
  },
  watch:{
    $route(){
      console.log(this.$route.meta);

      document.getElementsByClassName('van-nav-bar__title')[0].style.color = this.$route.meta.color?this.$route.meta.color:'#000';

      if(this.$route.meta.needUser){
        if(!this.userInfo){
          this.$router.push({
            path:'/login'
          })
        }
      }
    }
  },

}
</script>

<style scoped>
.title {
  background: #ffffff00;
}

[class*=van-hairline]::after {
  border: none;
}
</style>
