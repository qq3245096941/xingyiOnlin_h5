<template>
  <div class="content">
    <van-list
        v-if="total>0"
        @load="load"
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了">
      <slot></slot>
    </van-list>

    <van-empty v-else description="暂无数据"/>
  </div>

</template>

<script>
export default {
  name: "List",
  props: {
    //总条数，必传
    total: {
      type: Number,
      required: true
    },

    //当前展示的条数，必传
    currLength: {
      type: Number,
      default: 0
    }
  },
  created() {
    this.$emit('getData');
  },
  data() {
    return {
      loading: true,
      finished: false,
    }
  },
  watch: {
    currLength(newValue) {
      this.loading = false;
      this.finished = newValue >= this.total;
    },
  },
  methods: {
    load() {
      this.$emit('getData');
    }
  }
}
</script>

<style scoped>
.content {
  overflow: auto;
  position: relative;
  z-index: 1000;
}
</style>
