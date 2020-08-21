<!--我的钱包-->
<template>
  <div ref="content" class="content">

    <div ref="header">
      <img class="back" :src="require('@/static/img/redBack.png')" alt="">
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

    <div class="detail">
      <p>佣金明细</p>
      <p>￥{{(account.everyMy + account.everyOne + account.everyTwo).toFixed(2)}}</p>
    </div>

  </div>
</template>

<script>
import page from "@/mixin/page";
import {sourceAll} from '@/api/rank'
import {getUserInfo} from '@/api/user'

export default {
  name: "myWallet",
  mixins: [page],
  data() {
    return {
      sourceType: [
        '第一佣金',
        '第二佣金',
        '个人佣金'
      ],
      account: {}
    }
  },
  mounted() {
    getUserInfo({
      userId: this.userInfo.userId
    }).then(data => {
      this.account = data.account;
    })
  },
  methods: {
    getList() {
      sourceAll({
        userId: this.userInfo.userId,
        page: this.currPage,
        rows: this.pageSize
      }).then(data => {
        this.currPage++;
        this.list = [...this.list, ...data.sourceList];
        this.total = data.totalCount;
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
