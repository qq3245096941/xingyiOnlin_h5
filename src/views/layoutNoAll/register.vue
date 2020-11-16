<template>
  <div class="content">
    <img class="back" :src="require('@/static/img/loginBack.png')" alt="">

    <div class="login">
      <van-form class="form" @submit="onSubmit">
        <fileUpload @change="getImgUrl">
          <van-image style="background: #d2d2d2" width="40" height="40" round :src="userTx===''?require('@/static/touxiang.png'):userTx"/>
        </fileUpload>

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

        <van-field
            @click="isShowArea=true"
            style="margin-top: 15px"
            :value="province + province===city?'':city + county"
            placeholder="省市区"
            disabled
            :rules="[{ required: true, message: '请选择省市区' }]"/>

        <van-field
            style="margin-top: 15px"
            v-model="addDesc"
            placeholder="详细地址"
            :rules="[{ required: true, message: '请选择详细地址' }]"/>

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
              <router-link to="/layoutNoTab/registrProtocol">《芸艺富通注册协议》</router-link>
            </van-checkbox>
          </template>
        </van-field>

        <div style="margin: 16px;">
          <van-button round block type="danger" native-type="submit">
            提交
          </van-button>
        </div>
      </van-form>

      <van-popup v-model="isShowArea" position="bottom" @close="isShowArea=false">
        <van-area title="选择地址" :area-list="area" @confirm="areaConfirm"/>
      </van-popup>
    </div>
  </div>
</template>

<script>
import {sendCode, registerUser} from '@/api/user'
import handleLocalStorage from '@/uitls/localStorage'
import area from "@/assets/js/area";

export default {
  name: 'register',
  components: {},
  data() {
    return {
      userTx: '',
      tel: '',
      password: '',

      province: '',
      city: '',
      county: '',
      addDesc:'', //详细地址

      code: '',
      isConsent: true,  //是否同意我的协议
      codeNum: 0,
      reCode: '',
      userName: '', //昵称

      area,
      isShowArea: false
    }
  },
  mounted() {
    this.reCode = this.$route.query.reCode ? this.$route.query.reCode : '';
  },
  methods: {
    /*地址选择完成*/
    areaConfirm(res) {
      this.province = res[0].name;
      this.city = res[1].name;
      this.county = res[2].name;
      this.isShowArea = false;
    },
    /*获取图片路径*/
    getImgUrl(res) {
      this.userTx = this.imgPrefixUrl + res;
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
        userTx: this.userTx,

        province: this.province,
        city: this.city,
        county: this.county,
        addDesc:this.addDesc,

        reCode: this.reCode,
        userName: this.userName,
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
    background: url("../../static/img/register.png");
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
