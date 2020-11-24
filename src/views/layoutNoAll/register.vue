<template>
  <div class="content">
    <img class="back" :src="require('@/static/img/loginBack.png')" alt="">

    <div class="login">
      <van-form class="form" @submit="onSubmit">

        <van-field
            style="margin-top: 15px"
            v-model="tel"
            placeholder="请输入手机号"
            :rules="[{ pattern:/^1[3456789]\d{9}$/, message: '手机号格式不正确' }]"/>
        <van-field
            style="margin-top: 15px"
            v-model="password"
            type="password"
            placeholder="请输入密码"
            :rules="[{ required: true, message: '请填写密码' }]"/>
        <van-field
            style="margin-top: 15px"
            v-model="userName"
            placeholder="请输入昵称"
            :rules="[{ required: true, message: '请填写昵称' }]"/>

<!--        <van-area title="标题" :area-list="areaList" />-->

        <van-field
            style="margin-top: 15px"
            v-model="code"
            type="text"
            placeholder="请输入验证码"
            :rules="[{ required: true, message: '请填写验证码' }]">
          <template #button>
            <van-button :disabled="codeNum>0" native-type="button" size="small" type="warning" @click="getCode">
              {{codeNum === 0 ? '发送验证码' : codeNum + '秒'}}
            </van-button>
          </template>
        </van-field>

        <van-field>
          <template #input>
            <van-checkbox :label-disabled="true" icon-size="14px" style="font-size: 8px" v-model="isConsent"
                          shape="square">
              我已阅读并接受
              <router-link to="/layoutNoTab/registrProtocol">《芯艺在线注册协议》</router-link>
            </van-checkbox>
          </template>
        </van-field>

        <div style="margin: 16px;">
          <van-button round block type="danger" native-type="submit">
            提交
          </van-button>
        </div>
      </van-form>

    </div>
  </div>
</template>

<script>
import {sendCode, registerUser} from '@/api/user'
import handleLocalStorage from '@/uitls/localStorage'

export default {
  name: 'register',
  components:{

  },
  data() {
    return {
      avatar:'',
      tel: '',
      password: '',
      address:'', //地址
      code: '',
      isConsent: true,  //是否同意我的协议
      codeNum: 0,
      reCode: '',
      userName:'' //昵称
    }
  },
  mounted() {
    this.reCode = this.$route.query.reCode?this.$route.query.reCode:'';
  },
  methods: {
    /*获取图片路径*/
    getImgUrl(res){
      this.avatar = this.imgPrefixUrl+res;
      console.log(this.avatar);
    },
    onSubmit() {
      if (this.isConsent === false) {
        this.Toast('请勾选我已同意协议');
        return;
      }

      registerUser({
        tel: this.tel,
        vcode: this.code,
        userPwd: this.password,
        reCode: this.reCode,
        userName:this.userName,
      }).then(data => {
        this.Toast('注册成功');

        handleLocalStorage('set', 'userInfo', data.obj);

        this.$router.push({
          path: this.$eventBus.savePath ? this.$eventBus.savePath : '/'
        })

        this.$eventBus.savePath = '';
      })
    },

    /*获取短信验证码*/
    getCode() {
      if (!this.tel) {
        this.Toast('请填写手机号');
        return;
      }

      sendCode({
        telephone: this.tel
      }).then(data => {
        this.Toast('已发送短信验证码');
        this.codeNum = 60;
        let interval = setInterval(() => {
          this.codeNum--;
          if (this.codeNum === 0) {
            clearInterval(interval)
          }
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

    .form {
      margin-top: 45px;
    }
  }
}
</style>
