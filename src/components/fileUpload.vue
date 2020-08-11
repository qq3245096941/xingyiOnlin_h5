<template>
  <van-uploader :after-read="afterRead">
    <slot></slot>
  </van-uploader>
</template>

<script>
import axios from 'axios'

export default {
  name: "fileUpload",
  methods: {
    afterRead(file) {

      let param = new FormData()  // 创建form对象
      param.append('image', file.file)  // 通过append向form对象添加数据
      param.append('name', 'image') // 添加form表单中其他数据

      let config = {
        headers: {'Content-Type': 'multipart/form-data'},

      }
      // 添加请求头
      axios.post('http://39.99.138.150:8083/famous/file/uploadPicAjax', param, config)
          .then(res => {
            this.$emit('change',res.data.data.picPath.split('images/')[1]);
          })
    }
  }
}
</script>

<style scoped>

</style>
