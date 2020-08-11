<template>
  <van-uploader :before-read="beforeRead" :after-read="afterRead">
    <slot></slot>
  </van-uploader>
</template>

<script>
import request from "@/uitls/request";

export default {
  name: "fileUpload",
  methods:{
    beforeRead(file){
      if (file.type !== 'image/jpeg') {
        this.Toast('请上传 jpg 格式图片');
        return false;
      }
      return true;
    },
    afterRead(file){
      console.log(file);

      request({
        method:'post',

      })
    }
  }
}
</script>

<style scoped>

</style>
