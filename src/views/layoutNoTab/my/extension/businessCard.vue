<template>
  <div class="content">
    <div style="position: relative">
      <img :src="require('@/static/img/promotion_top.png')" alt="">

      <div style="position: relative">
        <img :src="require('@/static/img/promotion_bottom.png')" alt="">
        <div id="qrcode"></div>
      </div>

    </div>

  </div>
</template>

<script>
import {configInfo} from '@/api/config'

export default {
  name: "businessCard",
  data() {
    return {
      url: ''
    }
  },
  mounted() {
    configInfo({code: 'SYSTEM_URL'}).then(data => {
      this.url = data.data.sysValue + '#/register?reCode=' + this.userInfo.reCode;
      let qrcode = new QRCode(document.getElementById("qrcode"), {
        text: this.url,
        width: 118,
        height: 118,
        correctLevel: QRCode.CorrectLevel.H
      });
    })
  }
}
</script>

<style scoped lang="scss">
.content {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;

  img {
    display: block;
    width: 100%;
  }

  #qrcode {
    position: absolute;
    z-index: 1000;
    top: 10px;
    right: 35px;

  }
}
</style>
