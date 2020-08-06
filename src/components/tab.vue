<template>
  <div class="tab">
    <div :class="['item',item.value===tab.value?'active':'']" @click="itemClick(item)" v-for="(item,index) in tab.list"
         :key="index">
      {{item.title}}
    </div>
  </div>
</template>

<script>
export default {
  name: "tab",
  data() {
    return {
      tab: {
        value: 0,
        list: [
          {
            title: '首页',
            value: 0,
            url: '/'
          },
          {
            title: '公告',
            value: 1,
            url: '/notice'
          },
          {
            title: '我的',
            value: 2,
            url: '/my'
          }
        ]
      }
    }
  },
  methods: {
    itemClick(res) {
      if (this.tab.value === res.value) return;
      this.tab.value = res.value;
      this.$router.push({
        path: res.url
      })
    }
  }
}
</script>

<style scoped lang="scss">
.tab {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  border-top: 1px solid #d2d2d2;
  z-index: 1000;
  background: #fff;

  .item {
    flex: 1;
    height: 100%;
    line-height: 50px;
  }

  .active {
    background: red;
    color: #fff;

  }
}
</style>
