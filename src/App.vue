<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>
<style lang="scss">
  *{
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

  p{
    margin: 5px 0;
  }
</style>
