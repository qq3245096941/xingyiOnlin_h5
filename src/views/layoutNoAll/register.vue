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
        <van-field
            style="margin-top: 15px"
            v-model="code"
            type="text"
            placeholder="请输入验证码">
          <template #button>
            <van-button size="small" type="warning">发送验证码</van-button>
          </template>
        </van-field>

        <van-field>
          <template #input >
            <van-checkbox icon-size="14px" style="font-size: 8px" v-model="isConsent" shape="square" >我已阅读并接受《名匠商城协议》</van-checkbox>
          </template>
        </van-field>

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
  name: 'register',
  data() {
    return {
      username: '',
      password: '',
      code: '',
      isConsent:true,  //是否同意我的协议
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

    .form {
      margin-top: 45px;
    }
  }
}
</style>
