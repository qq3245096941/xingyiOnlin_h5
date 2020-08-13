<!--主页-->
<template>
  <div style="background: #fff">
    <div class="lunbo">
      <img src="../../assets/img/main/lunbo.svg" alt="">
    </div>
    <!--通告栏-->
    <van-notice-bar
        color="#000"
        background="#c5c8ce"
        :left-icon="require('../../assets/img/gonggao.svg')"
        text="这是通告栏。"
        mode="link"
    @click="$router.push({path:'/layout/notice'})"/>

    <!--商品区-->
    <div class="shopping">
      <p>热门推荐</p>
      <div class="typeList">
        <div class="item" v-for="(item,index) in list" :key="index" @click="goDisTrict(item)">

          <img :src="imgPrefixUrl + item.path" alt="">

          <div class="body">
            <p class="title">[{{item.name}}]</p>
            <p class="time">开启时间：{{item.openDate}} ~ {{item.closeDate}}</p>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getTypeList} from "@/api/type";
import {bannerAll} from '@/api/banner'

export default {
  name: "index",
  data() {
    return {
      list: []
    }
  },
  methods: {
    goDisTrict(item) {
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
      type:'index'
    }).then(data=>{
      console.log(data);
    })

    getTypeList({page:1,rows:9999}).then(data => {
      this.list = data.cmTypeList;
    })
  }
}
</script>

<style scoped lang="scss">
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
  padding: 10px;

  .item {
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.3);
    position: relative;
    width: 100%;
    height: 130px;
    border-radius: 5px;
    overflow: hidden;
    margin-bottom: 15px;
    padding: 70px 0 0 15px;
  }

  .body{
    position: relative;
    z-index: 1000;

    .title{
      font-size: 13px;
      font-weight: bold;
      color: #fff;
    }

    .time{
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
</style>
