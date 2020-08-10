<!--推广人排行-->
<template>
  <div class="content" ref="content">
    <div class="topBody" ref="header">
      <img :src="require('@/static/img/promoter.png')" alt="">
      <p class="time">截止日期：2020年11月1日</p>
    </div>

    <div class="bottomBody">


      <img :src="require('@/static/img/bottom.png')" alt="">
      <List :style="{height:this.listHeight}" :curr-length="list.length" :total="40" @getData="getList">
        <div class="list" >
          <div class="item" v-for="item in list">

            <p>
              {{item.ranking}}
            </p>

            <p class="userInfo">
              <van-image round width="18" height="18" :src="item.icon"/>
              {{item.nickname}}
            </p>

            <p>
              {{item.peopleNumber}}人
            </p>
          </div>
        </div>
      </List>
    </div>

  </div>
</template>

<script>
import avatar from '@/assets/img/my/avatar.jpg';
import page from "@/mixin/page";

export default {
  name: "ListOfPromoters",
  mixins: [page],
  data() {
    return {
      list: []
    }
  },
  mounted() {

  },
  methods: {
    getList() {
      setTimeout(() => {
        let list = Array.from({length: 20}).map((item, index) => {
          return {
            ranking: index,
            icon: avatar,
            nickname: '张三',
            peopleNumber:1523
          }
        })

        this.list = [...this.list, ...list];
      }, 1000)
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

  .bottomBody {
    position: relative;
    top: -5px;

    img {
      display: block;
      width: 100%;
      position: absolute;
    }

    .list{
      position: relative;
      z-index: 1000;

      .item {
        display: flex;
        align-items: center;
        margin: 15px 0;

        p{
          flex: 1;
          text-align: center;
        }

      }
    }
  }
}
</style>
