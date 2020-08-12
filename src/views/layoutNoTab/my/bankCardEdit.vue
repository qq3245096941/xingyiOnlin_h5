<template>
  <van-form @submit="onSubmit" class="card">
    <van-field
        v-model="info.realName"
        label="姓名"
        :rules="[{ required: true, message: '请填写姓名' }]"
    />
    <van-field
        v-model="info.userTel"
        type="tel"
        label="手机号"
        :rules="[{ required: true, message: '请输入手机号' }]"
    />
    <van-field
        v-model="info.bankCode"
        type="digit"
        label="银行卡号"
        :rules="[{ required: true, message: '请输入银行卡号' }]"
    />
    <van-field
        v-model="info.bankDeposit"
        type="text"
        label="开户行"
        :rules="[{ required: true, message: '请输入开户行' }]"
    />

    <div style="margin: 16px;">
      <van-button round block type="danger" native-type="submit">
        修改
      </van-button>
    </div>
  </van-form>
</template>

<script>
import {updatePay,payInfo} from '@/api/pay'

export default {
  name: "bankCardEdit",
  data(){
    return {
      info:{}
    }
  },
  mounted() {
    payInfo({
      payId:this.$route.query.payId
    }).then(data=>{
      this.info = data.data;
    })
  },
  methods:{
    onSubmit(){
      updatePay({
        ...this.info
      }).then(data=>{
        this.Toast('保存成功');
      })
    }
  }
}
</script>

<style scoped>

</style>
