<template>
  <van-tabs sticky>
    <van-tab title="公告通知">
      <inform :remark-type="1"></inform>
    </van-tab>
    <van-tab title="协议">
      <inform></inform>
    </van-tab>
  </van-tabs>
</template>

<script>
import inform from "@/views/component/inform";

export default {
  name: "notice",
  components: {
    inform
  },
  data() {
    return {
    }
  },
  mounted() {

  }
}
</script>

<style scoped>

</style>
