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
import {addPay, updatePay, payInfo} from '@/api/pay'

export default {
  name: "bankCardEdit",
  data() {
    return {
      info: {
        realName: '',
        userTel: '',
        bankCode: '',
        bankDeposit: '',
        payId: '',
        payType:'2',
      }
    }
  },
  mounted() {
    this.info.payId = this.$route.query.payId || '';

    if (this.info.payId) {
      payInfo({
        payId: this.info.payId
      }).then(data => {
        this.info.realName = data.data.realName;
        this.info.userTel = data.data.userTel;
        this.info.bankCode = data.data.bankCode;
        this.info.bankDeposit = data.data.bankDeposit;
        this.info.payType = data.data.payType;
      })
    }
  },
  methods: {
    onSubmit() {
      if (this.info.payId) {
        updatePay({
          ...this.info
        }).then(data => {
          this.Toast('保存成功');
        })
      } else {
        Reflect.deleteProperty(this.info, 'payId');
        addPay({
          userId: this.userInfo.userId,
          payName:'银行卡',
          payType:'2',
          ...this.info
        }).then(data => {
          this.Toast('保存成功');
        })
      }
    }
  }
}
</script>

<style scoped>

</style>
