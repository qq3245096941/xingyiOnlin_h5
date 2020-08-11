<template>
  <div class="content">
    <img class="back" :src="require('@/static/img/loginBack.png')" alt="">

    <div class="login">
      <van-form class="form" @submit="onSubmit">
        <van-field
            style="margin-top: 15px"
            v-model="username"
            placeholder="请输入手机号"/>
        <van-field
            style="margin-top: 15px"
            v-model="password"
            type="password"
            placeholder="请输入密码"/>

        <p class="register" ></p>

        <div class="btns">
          <van-button block type="danger" native-type="onSubmit">
            提交
          </van-button>
          <van-button style="margin-top: 10px" block type="warning" @click="$router.push({path:'/register'})">
            注册
          </van-button>
          <img style="margin-top: 10px" @click="authorization" :src="require('@/assets/img/weixinLogo.svg')" alt="">
          <p style="text-align: center;font-size: 11px">授权登录</p>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import {userLogin} from '@/api/user'

export default {
  name: 'login',
  data() {
    return {
      username: '18322171989',
      password: '123'
    }
  },
  methods: {
    onSubmit(res) {
      userLogin({
        tel:this.username,
        userPwd: this.password
      }).then(data=>{
        console.log(data);
      })
    },
    authorization() {
      window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxd71848e1ce66dcd6&redirect_uri=REDIRECT_URI&response_type=code&scope=SCOPE&state=STATE#wechat_redirect`
      /* userLogin().then(data=>{

       })*/
    }
  }
}
</script>

<style scoped lang="scss">
.content {
  position: absolute;
  width: 100%;
  height: 100%;

  .back {
    z-index: 1;
    position: absolute;
    width: 100%;
  }

  .login {
    width: 279px;
    height: 421px;
    background: url("../../static/img/login.png");
    background-size: 100% 100%;
    position: relative;
    z-index: 1000;
    margin: 20% auto;
    padding: 30px;

    .register {
      text-align: right;
      margin: 10px;
      font-size: 12px;
    }

    .form {
      margin-top: 45px;
    }

    .btns{
      display: flex;
      flex-direction: column;
      align-content: center;
    }
  }
}
</style>
