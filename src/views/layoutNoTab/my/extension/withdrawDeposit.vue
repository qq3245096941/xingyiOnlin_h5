<!--立刻提现-->
<template>
  <div class="content">
    <img class="back" :src="require('@/static/img/redBack.png')" alt="">
    <div class="moneyList">
      <div class="card">
        可提现佣金：&nbsp;&nbsp;<span class="money">￥{{aggregateMoney}}</span>
      </div>

      <div class="card form">
        <van-form @submit="onSubmit" scroll-to-error :show-error="false">
          <p style="font-size: 13px">提现金额<span style="float: right" @click="money = aggregateMoney">全部提现</span></p>
          <van-field
              style="font-size: 30px"
              v-model="money"
              type="number"
              placeholder="￥"
              :rules="[
                    { required: true, message: '请填写金额' },
                    {
                      validator(){
                        return money <= aggregateMoney
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
              label="提现电话"
              :rules="[{ required: true, message: '请输入提现电话' }]"
          />
          <van-field
              v-model="zifubao"
              type="text"
              label="提现支付宝"
              :rules="[{ required: true, message: '请输入提现支付宝' }]"
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

export default {
  name: "withdrawDeposit",
  data() {
    return {
      aggregateMoney: 3250,  //总金额

      money: '',
      name: '',
      phone: '',
      zifubao: ''
    }
  },
  methods: {
    onSubmit(res) {
      console.log(res);
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
