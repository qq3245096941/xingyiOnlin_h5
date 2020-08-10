<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<style lang="scss">
* {
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

p {
  margin: 5px 0;
}

.card {
  margin: 10px;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  border-radius: 5px;
  background: #fff;
}

.hen {
  width: 100%;
  background: #f8f8f9;
  height: 6px;
}

.van-button--danger {
  background: #750202 !important;
  border: 1px solid #750202 !important;
}
</style>
