<template>
  <div id="app">
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
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;

  .container {
    width: 100%;
    height: 92%;
    overflow: auto;
  }
}


</style>
