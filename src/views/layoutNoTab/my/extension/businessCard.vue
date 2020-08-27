<template>
  <div class="content">
    <div style="position: relative">
      <img class="back" :src="haibao" alt="">

      <div>

      </div>
      <div id="qrcode"></div>
    </div>

  </div>
</template>

<script>
import businessCard from "@/static/img/businessCard.png"
import {configInfo} from '@/api/config'

export default {
  name: "businessCard",
  data() {
    return {
      haibao: businessCard,
      url: ''
    }
  },
  mounted() {
    configInfo({code: 'SYSTEM_URL'}).then(data => {
      this.url = data.data.sysValue + '#/register?reCode=' + this.userInfo.reCode;
      console.log(this.url);

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

  .back {
    display: block;
    width: 100%;
  }

  #qrcode {
    position: absolute;
    z-index: 1000;
    bottom: 10%;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
}
</style>
