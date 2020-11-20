<!--我的钱包-->
<template>
  <div ref="content" class="content">

    <div ref="header" style="height: 230px">
      <img class="back" :src="require('@/static/img/redBack.png')" alt="">
      <!--提现记录-->
      <div class="body">
        <div class="withdrawalRecord" @click="$router.push({path:'/layoutNoTab/withdrawalRecord'})">提现记录
          <van-icon name="arrow"/>
        </div>

        <div class="commission card">
          <p class="currMoneyTitle">当前佣金</p>
          <p class="currMoney">￥{{account.userSumComm}}</p>
          <div style="display: flex">
            <p class="ziP">今日收益：<span
                style="color: #ff9900">￥{{(account.everyMy + account.everyOne + account.everyTwo).toFixed(2)}}</span></p>
            <p class="ziP">累计提现：<span style="color: #ff9900">￥{{account.withdrawlComm}}</span></p>
          </div>

          <div class="withdraw" @click="$router.push({path:'/layoutNoTab/withdrawDeposit'})">立刻提现</div>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="title">
        <p>日期</p>
        <p>佣金</p>
        <p>佣金来源</p>
      </div>

      <List class="list" :style="{height:contentHeight-headerHeight-40+'px'}" :total="total" :curr-length="list.length"
            @getData="getList">
        <div v-for="item in list">
          <div class="item" @click="item.isShow = !item.isShow">
            <p>{{item.createDate.split(' ')[0]}}</p>
            <p>{{item.sourceMoney}}</p>
            <p>{{sourceType[item.sourceType]}}</p>
          </div>
        </div>
      </List>
    </div>
  </div>
</template>

<script>
import page from '@/mixin/page'
import { sourceAll } from '@/api/rank'
import { getUserInfo } from '@/api/user'

export default {
  name: 'myWallet',
  mixins: [page],
  data () {
    return {
      sourceType: [
        '第一佣金',
        '第二佣金',
        '个人佣金'
      ],
      account: {}
    }
  },
  mounted () {
    getUserInfo({
      userId: this.userInfo.userId
    }).then(data => {
      this.account = data.account
    })
  },
  methods: {
    getList () {
      sourceAll({
        userId: this.userInfo.userId,
        page: this.currPage,
        rows: this.pageSize
      }).then(data => {
        this.currPage++
        this.list = [...this.list, ...data.sourceList]
        this.total = data.totalCount
      })
    }
  },
}
</script>

<style scoped lang="scss">
.content {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;

  .detail {
    position: absolute;
    top: 13%;
    color: #fff;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;

    p {
      font-size: 15px;
    }
  }

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
      font-size: 12px;
      color: #fff;
      text-align: right;
      margin-right: 10px;
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

  .title {
    display: flex;
    align-content: center;

    p {
      flex: 1;
      text-align: center;
      font-size: 14px;
      font-weight: bold;
    }
  }

  .list {
    margin-bottom: 40px;

    .item {
      display: flex;
      align-content: center;

      p {
        flex: 1;
        text-align: center;
        font-size: 14px;
      }
    }
  }
}
</style>
