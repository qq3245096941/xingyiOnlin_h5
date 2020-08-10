<!--推广人统计-->
<template>
  <div class="content" ref="content">
    <div class="people">
      <p style="font-size: 14px">推广人数</p>
      <p class="peopleNumber">100人</p>
    </div>

    <div class="header" ref="header">
      <img class="back" :src="require('@/static/img/redBack.png')" alt="">
      <van-search clearable shape="round" background="#f2f2f200" class="search" v-model="search" placeholder="搜索会员名称"/>
      <div class="hen"></div>
      <div class="sort">
        <p>金额排序
          <van-icon name="filter-o"/>
        </p>
        <p>订单排序
          <van-icon name="filter-o"/>
        </p>
      </div>
    </div>

    <List class="list" :style="{'height':this.listHeight}" @getData="getList" :total="40" :curr-length="list.length">
      <!--list-->
      <div class="item" v-for="(item,index) in list" :key="index">

        <van-image class="" round width="40" height="40" :src="item.avatar"/>

        <div class="message">
          <p>{{item.nickname}}</p>
          <p>
            <span style="color: #19be6b">0</span>人&nbsp;&nbsp;
            <span style="color: #ff9900">0</span>单&nbsp;&nbsp;
            <span style="color: #ed4014">0</span>元</p>
        </div>

        <div class="time">{{item.time}}</div>
      </div>
    </List>

  </div>
</template>

<script>
import avatar from '@/assets/img/my/avatar.jpg'
import page from "@/mixin/page";

export default {
  name: "promoterStatistics",
  mixins: [page],
  data() {
    return {
      search: '',
      list: []
    }
  },
  created() {

  },
  methods: {
    getList() {
      setTimeout(() => {
        let list = Array.from({length: this.pageSize}).map(item => {
          return {
            avatar,
            nickname: '张三',
            time: '2020-08-10'
          }
        })

        this.list = [...this.list, ...list];
      }, 1000);
    }
  }
}
</script>

<style scoped lang="scss">
.content {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  background: #fff;

  .people {
    z-index: 1000;
    position: absolute;
    width: 100%;
    top: 15%;
    text-align: center;
    color: #f2f2f2;

    .peopleNumber {
      font-weight: bold;
    }
  }

  .header {
    display: flex;
    flex-direction: column;
    align-items: center;

    .back {
      width: 100%;
      display: block;
    }

    .search {
      width: 80%;
    }

    .sort {
      border-bottom: 1px solid #e8eaec;
      padding: 5px;
      display: flex;
      align-items: center;
      width: 100%;

      p {
        font-size: 13px;
        flex: 1;
        text-align: center;
      }
    }
  }

  .list {
    width: 100%;
    height: 200px;
    overflow: auto;

    .item {
      display: flex;
      align-items: center;
      border-bottom: 1px solid #e8eaec;
      padding: 5px 0 5px 20px;

      .avatar {
        text-align: center;
      }

      .message {
        margin-left: 15px;
        flex: 1;
        font-size: 12px;
      }

      .time {
        flex: 1;
        font-size: 12px;
        text-align: right;
        margin-right: 10px;
        color: #c5c8ce;
      }
    }
  }

}
</style>
