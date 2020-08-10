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

        <p class="register" @click="$router.push({path:'/register'})">注册</p>

        <div style="margin: 16px;">
          <van-button round block type="danger" native-type="onSubmit">
            提交
          </van-button>
        </div>
      </van-form>

    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods:{
    /* onSubmit(res){
       console.log(res);
     }*/
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

    .register{
      text-align: right;
      margin: 10px;
      font-size: 12px;
    }

    .form {
      margin-top: 45px;
    }
  }
}
</style>
