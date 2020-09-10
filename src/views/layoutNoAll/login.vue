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

        <p class="register"></p>

        <div class="btns">
          <van-button block type="danger" native-type="onSubmit">
            登录
          </van-button>
          <van-button style="margin-top: 10px" block type="warning" @click="$router.push({path:'/register'})">
            注册
          </van-button>
          <!--          <img style="margin-top: 10px" @click="authorization" :src="require('@/assets/img/weixinLogo.svg')" alt="">-->
          <!--          <p style="text-align: center;font-size: 11px">授权登录</p>-->
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import {userLogin, sendCode} from '@/api/user'
import handleLocalStorage from '@/uitls/localStorage'

export default {
  name: 'login',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  created() {
    window.localStorage.removeItem('userInfo');
  },
  methods: {
    async onSubmit(res) {
      userLogin({
        code: window.localStorage.getItem('wxcode'),
        tel: this.username,
        userPwd: this.password
      }).then(data => {
        if (data.code === '1') {
          this.Toast(data.message);
          return;
        }

        //将用户信息保存在本地
        handleLocalStorage('set', 'userInfo', data.user);

        this.Toast('登录成功');

        setTimeout(() => {
          this.$router.replace({
            path: this.$eventBus.savePath ? this.$eventBus.savePath : '/'
          })

          this.$eventBus.savePath = '';
        }, 1000)

      })
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

    .btns {
      display: flex;
      flex-direction: column;
      align-content: center;
    }
  }
}
</style>
