<template>
  <van-list
      class="list"
      @load="load"
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了">
    <slot></slot>
  </van-list>
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
  data() {
    return {
      loading: false,
      finished: false,
    }
  },
  watch: {
    currLength(newValue) {
      this.loading = false;
      this.finished = newValue >= this.total;
    }
  },
  created() {
    this.$emit('getData');
  },
  methods: {
    load() {
      this.$emit('getData');
    }
  }
}
</script>

<style scoped>
  .list{
    overflow: auto;
    position: relative;
    z-index: 1000;
  }
</style>
