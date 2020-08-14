<template>
  <div>
    <h3 style="text-align: center">{{info.noticeTitle}}</h3>
    <div style="padding: 20px;" v-html="info.noticeContent"></div>
  </div>
</template>

<script>
import {noticeInfo} from "@/api/inform";

export default {
  name: "noticeInfo",
  data(){
    return{
      info:{}
    }
  },
  created() {
    /*查询info*/
    noticeInfo({
      noticeId:this.$route.query.noticeId
    }).then(data=>{
      this.info = data.data;
    })
  }
}
</script>

<style scoped>

</style>
