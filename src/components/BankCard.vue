<template>
  <van-cell-group>
    <van-cell title="姓名" :value="info.realName" />
    <van-cell title="手机号" :value="info.userTel" />
    <van-cell title="银行卡" :value="info.bankCode" />
    <van-cell title="开户行" :value="info.bankDeposit" />
  </van-cell-group>
</template>

<script>
import {payInfo} from "@/api/pay";

export default {
  name: "BankCard",
  props:{
    payId:{
      type:Number,
      required:true
    }
  },
  data(){
    return{
      info:{}
    }
  },
  watch:{
    payId(newValue){
      payInfo({
        payId:newValue
      }).then(data=>{
        this.info = data.data;
      })
    }
  }
}
</script>

<style scoped>

</style>
