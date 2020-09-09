<template>
  <div></div>
</template>

<script>
import {userLogin} from "@/api/user";

export default {
  name: "authorization",
  mounted() {
    this.authorization();
  },
  methods: {
    authorization() {
      let url = 'http://lzf.xingyizaixian.com/#' + window.location.href.split('#')[1]//window.location.href;
      let code = this.getQueryValue('code');
      let reCode = this.$route.query.reCode;

      if (code) {
        window.localStorage.setItem('wxcode', code);

        let obj = {
          code
        }

        if (reCode) {
          Reflect.set(obj, 'reCode', reCode);
        }

        userLogin(obj).then(data => {
          console.log(data);
        })
      } else {
        window.location.replace("https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxd71848e1ce66dcd6&redirect_uri=" + encodeURIComponent(url) + "&response_type=code&scope=snsapi_userinfo&connect_redirect=1&state=0#wechat_redirect");
      }
    }
  }
}
</script>

<style scoped>

</style>
