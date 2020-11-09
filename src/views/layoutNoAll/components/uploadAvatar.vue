<template>
  <van-uploader>
    <div>
      <div class="avatar">
        <img :src="require('@/static/touxiang.png')" alt="">
      </div>
    </div>
  </van-uploader>
</template>

<script>
export default {
  name: "uploadAvatar"
}
</script>

<style scoped lang="scss">
  .avatar{

    position: relative;
    margin: 0 auto;
    text-align: center;

    img{
      width: 50px;
      height: 50px;
      background: #d2d2d2;
      border-radius: 50%;
    }
  }
</style>
