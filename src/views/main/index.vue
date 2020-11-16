<!--主页-->
<template>
  <div style="background: #fff">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in bannerList" style="padding: 5px">
        <img style="display: block;width: 100%;height: 130px;border-radius: 10px;" :src="imgPrefixUrl+item.imagepath"
             alt="">
      </van-swipe-item>
    </van-swipe>

    <!--通告栏-->
    <van-notice-bar
        vertical
        color="#000"
        background="#c5c8ce"
        :left-icon="require('../../assets/img/gonggao.svg')"
        :scrollable="false"
        mode="link"
        @click="$router.push({path:'/layout/notice'})">
      <van-swipe
          class="notice-swipe"
          :autoplay="3000"
          vertical
          :show-indicators="false">
        <van-swipe-item :key="index" v-for="(item,index) in informList">
          <span>{{item.noticeTitle}}</span>
          <span style="margin-left: 30px;font-size: 10px;float: right">{{item.createDate}}</span>
        </van-swipe-item>
      </van-swipe>
    </van-notice-bar>

    <!--商品区-->
    <div class="shopping">
      <p>热门推荐</p>
      <div class="typeList">
        <div class="item" v-for="(item,index) in list" :key="index" @click="goDisTrict(item)">

          <img :src="imgPrefixUrl + item.path" alt="">

          <div class="body">
            <p class="title">[{{item.name}}]</p>
            <p class="time" v-if="item.openStat==='0'">开启时间：{{item.openDate}} ~ {{item.closeDate}}</p>
            <p class="time" v-else>待开放</p>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getTypeList} from "@/api/type";
import {bannerAll} from '@/api/banner'
import {noticeList} from '@/api/inform'

export default {
  name: "index",
  data() {
    return {
      list: [],
      bannerList: [],
      informList: []  //公告list
    }
  },
  methods: {
    goDisTrict(item) {
      if (item.openStat === '1') {
        this.Toast('暂未开放');
        return;
      }

      this.$router.push({
        path: '/layoutNoTab/district',
        query: {
          commdityType: item.cid
        }
      })
    }
  },
  created() {
    /*获取banner*/
    bannerAll({
      type: 'index'
    }).then(data => {
      this.bannerList = data.list;
    })
    /*获取通知列表*/
    noticeList({
      type: 1,
      page: 1,
      rows: 9999
    }).then(data => {
      this.informList = data.list;
    })

    getTypeList({
      page: 1,
      rows: 9999,
      openType: 0
    }).then(data => {
      this.list = data.cmTypeList;
    })
  }
}
</script>

<style scoped lang="scss">

.notice-swipe {
  height: 40px;
  line-height: 40px;
}

.lunbo {
  width: 100%;
  padding: 10px;

  img {
    display: block;
    width: 100%;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
  }
}

.shopping {
  padding: 10px 6px;

  .typeList {
    .item {
      box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.3);
      position: relative;
      width: 100%;
      height: 130px;
      border-radius: 17px;
      overflow: hidden;
      margin-bottom: 15px;
      padding: 70px 0 0 15px;

      .body {
        position: relative;
        z-index: 1000;

        .title {
          font-size: 13px;
          font-weight: bold;
          color: #fff;
        }

        .time {
          font-size: 13px;
          color: #fff;
          font-weight: bold;
        }
      }

      img {
        top: 0;
        left: 0;
        position: absolute;
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
