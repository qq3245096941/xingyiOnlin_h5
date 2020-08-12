<template>
  <van-tabs sticky>
    <van-tab title="公告通知">
      <inform></inform>
    </van-tab>
    <van-tab title="协议">
      <protocol></protocol>
    </van-tab>
  </van-tabs>
</template>

<script>
import inform from "@/views/component/inform";
import protocol from "@/views/component/protocol";

export default {
  name: "notice",
  components: {
    inform, protocol
  },
  data() {
    return {
      list: []
    }
  },
  mounted() {
    this.list = Array.from({length: 20}).map(() => {
      return {
        time: '2020-01-01 11:11:11',
        title: '用户注册协议'
      }
    })
  }
}
</script>

<style scoped>

</style>
