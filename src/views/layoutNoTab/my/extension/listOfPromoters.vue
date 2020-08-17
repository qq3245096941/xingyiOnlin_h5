<!--推广人排行-->
<template>
  <div class="content" ref="content">
    <div class="topBody" ref="header">
      <img :src="require('@/static/img/promoter.png')" alt="">
      <p class="time">截止日期：2020年11月1日</p>
    </div>

    <div class="bottomBody">
      <div class="rank">
        <p @click="clickRank(1)" :class="{'active':rankType===1}">日排行</p>
        <p @click="clickRank(2)" :class="{'active':rankType===2}">周排行</p>
        <p @click="clickRank(3)" :class="{'active':rankType===3}">月排行</p>
      </div>

      <img :src="require('@/static/img/bottom.png')" alt="">
      <List :style="{height:this.listHeight}" :curr-length="list.length" :total="total" @getData="getList">
        <div class="list">
          <div class="item" v-for="(item,index) in list">
            <p>
              {{index+1}}
            </p>

            <div class="userInfo">
              <van-image round width="18" height="18" :src="filterAvatar(item.userTx)"/>
              <p class="nickname">{{item.nickName}}</p>
            </div>
            <p v-if="rankState===1">
              {{item.extPersoncount}}人
            </p>
            <p v-else>￥{{item.extComm}}</p>

          </div>
        </div>
      </List>
    </div>

  </div>
</template>

<script>
import page from "@/mixin/page";
import {maRanks} from '@/api/rank'

export default {
  name: "ListOfPromoters",
  mixins: [page],
  props:{
    rankState:{
      type:Number,
      default:1
    }
  },
  data() {
    return {
      list: [],
      rankType: 1
    }
  },
  methods: {
    getList() {
      maRanks({
        rankType: this.rankType,
        page: this.currPage,
        rows: this.pageSize
      }).then(data => {
        this.currPage++;
        this.total = data.totalCount;
        this.list = [...this.list, ...data.list];
      })
    },
    clickRank(index){
      this.currPage = 1;
      this.list = [];
      this.rankType = index;
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

  .topBody {
    position: relative;

    img {
      display: block;
      width: 100%;
    }

    p {
      position: absolute;
      bottom: 17px;
      text-align: center;
      width: 100%;
      font-size: 13px;
      color: #fff;
    }
  }

  .rank {
    position: absolute;
    z-index: 10000;
    width: 100%;
    display: flex;
    align-items: center;
    top: 0;

    p {
      flex: 1;
      text-align: center;
      font-size: 13px;
      font-weight: bold;
      color: #808695;
    }

    .active {
      color: #ed4014;
    }
  }

  .bottomBody {
    position: relative;
    top: -5px;

    img {
      display: block;
      width: 100%;
      position: absolute;
    }

    .list {
      padding-top: 10px;
      position: relative;
      z-index: 1000;

      .item {
        display: flex;
        align-items: center;
        margin: 15px 0;
        font-size: 12px;

        .userInfo{
          flex: 1;
          display: flex;
          align-items: center;
          padding-left: 10%;

          .nickname{
            margin-left: 5px;
            font-size: 10px;
            text-align: left;
          }
        }

        p {
          flex: 1;
          text-align: center;
        }
      }
    }
  }
}
</style>
