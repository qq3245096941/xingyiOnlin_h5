<!--我的推广-->
<template>
  <div class="content">
    <img class="back" :src="require('@/assets/img/my/hongsebeijing.svg')" alt="">
    <!--提现记录-->
    <div class="body">
      <div class="withdrawalRecord">提现记录
        <van-icon name="arrow"/>
      </div>

      <div class="commission card">
        <p class="currMoneyTitle">当前佣金</p>
        <p class="currMoney">￥00.00</p>
        <div style="display: flex">
          <p class="ziP">昨日收益：<span style="color: #ff9900">￥00.00</span></p>
          <p class="ziP">累计提现：<span style="color: #ff9900">￥00.00</span></p>
        </div>

        <div class="withdraw">立刻提现</div>
      </div>

      <!--tab-->
      <div class="tab">
        <div style="width: 50%" v-for="item in tabList" @click="$router.push({path:item.url})">
          <div class="tabItem card">
            <img :src="item.icon" alt="">
            <p>{{item.title}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import tuiguangmingpian from '@/assets/img/tuiguangmingpian.svg'
import tuiguangrentongji from '@/assets/img/tuiguangrentongji.svg'
import tuiguangrenpaihangbang from '@/assets/img/tuiguangrenpaihangbang.svg'
import yongjinpaihang from '@/assets/img/yongjinpaihang.svg'

export default {
  name: "myPromotion",
  data() {
    return {
      tabList: [
        {
          title: '推广名片',
          icon: tuiguangmingpian,
          url:'/layoutNoTab/businessCard'
        },
        {
          title: '推广人统计',
          icon: tuiguangrentongji,
          url:'/layoutNoTab/businessCard'
        },
        {
          title: '推广人排行',
          icon: tuiguangrenpaihangbang,
          url:'/layoutNoTab/listOfPromoters'
        },
        {
          title: '佣金排行',
          icon: yongjinpaihang,
          url:'/layoutNoTab/businessCard'
        }
      ]
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
  }

  .body {
    position: relative;
    top: -100px;
    display: flex;
    flex-direction: column;

    .withdrawalRecord {
      display: flex;
      align-items: center;
      font-size: 12px;
      color: #fff;
    }

    .commission {
      background: #fff;
      position: relative;

      .currMoneyTitle {
        margin: 0;
        font-size: 15px;
      }

      .currMoney {
        color: #ed4014;
        font-weight: bold;
        font-size: 18px
      }

      .ziP {
        flex: 1;
        font-size: 14px;
      }

      .withdraw {
        position: absolute;
        right: 0;
        top: 30px;
        width: 70px;
        font-size: 13px;
        text-align: center;
        padding: 5px;
        border-radius: 70px 0 0 70px;

        background: #ff9900;
      }
    }

    .tab {
      display: flex;
      flex-wrap: wrap;
      align-items: center;

      .tabItem {
        display: flex;
        align-items: center;
        flex-direction: column;

        p {
          margin-top: 5px;
          font-size: 15px
        }
      }
    }
  }
}
</style>
