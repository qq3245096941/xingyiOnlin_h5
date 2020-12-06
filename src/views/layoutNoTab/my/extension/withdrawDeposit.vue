<!--立刻提现-->
<template>
  <div class="content">
    <img class="back" :src="require('@/static/img/redBack.png')" alt="">
    <div class="moneyList">
      <div class="card">
        可提现佣金：&nbsp;&nbsp;<span class="money">￥{{account.userSumComm}}</span>
      </div>

      <div class="card form">
        <van-form @submit="onSubmit" scroll-to-error :show-error="false">
          <p style="font-size: 13px">提现金额<span style="float: right" @click="money = account.userSumComm">全部提现</span></p>
          <van-field
              style="font-size: 30px"
              v-model="money"
              type="number"
              placeholder="￥"
              :rules="[
                    { required: true, message: '请填写金额' },
                    {
                      validator(){
                        return money <= account.userSumComm
                      },
                      message: '您输入的金额已经超过啦！'
                    }
                  ]"/>
          <van-field
              v-model="name"
              type="text"
              label="提现姓名"
              :rules="[{ required: true, message: '请输入提现姓名' }]"
          />
          <van-field
              v-model="phone"
              type="tel"
              label="银行卡号"
              :rules="[{ required: true, message: '请输入银行卡号' }]"
          />
          <van-field
              v-model="zifubao"
              type="text"
              label="开户行"
              :rules="[{ required: true, message: '请输入开户行' }]"
          />

          <div style="margin: 16px;">
            <van-button round block type="danger" native-type="submit">
              立刻提现
            </van-button>
          </div>

        </van-form>
      </div>
    </div>
  </div>
</template>

<script>
import {getUserInfo} from '@/api/user'
import {addWith} from '@/api/withdraw'

export default {
  name: "withdrawDeposit",
  data() {
    return {
      money: '',
      name: '',
      phone: '',
      zifubao: '',

      account:{}
    }
  },
  mounted() {
    getUserInfo({
      userId:this.userInfo.userId
    }).then(data=>{
      this.account = data.account;
    })
  },
  methods: {
    onSubmit(res) {
      addWith({
        money:this.money,
        realName:this.name,
        userTel:this.phone,
        alipayNumber:this.zifubao,
        userId:this.userInfo.userId
      }).then(data=>{
        this.$router.push({
          path:'/layoutNoTab/withdrawalRecord'
        })
      })
    }
  }
}
</script>

<style scoped lang="scss">
.content {
  top: 0;
  position: absolute;
  width: 100%;
  height: 100%;

  .back {
    display: block;
    width: 100%;
    position: absolute;
    top: 0;
  }

  .moneyList {
    margin-top: 30%;
    position: relative;

    .money {
      color: #ed4014;
      font-weight: bold;
      font-size: 20px;
    }

    .form {

    }
  }

  .btn {
    position: fixed;
    bottom: 0;
    width: 100%;
  }
}
</style>
