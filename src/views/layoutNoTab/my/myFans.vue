<!--我的粉丝-->
<template>
  <div class="content" ref="content">
    <div class="people">
      <p v-if="userId" style="font-size: 14px">{{user.nickName}}</p>
      <p style="font-size: 14px">粉丝人数</p>
      <p class="peopleNumber">{{list.length}}人</p>
    </div>

    <div class="header" ref="header">
      <img class="back" :src="require('@/static/img/redBack.png')" alt="">
      <van-search clearable shape="round" background="#f2f2f200" class="search" v-model="nickName" placeholder="搜索会员名称"
                  @search="getList"/>
      <div class="hen"></div>


      <div class="sort">
        <van-dropdown-menu>
          <van-dropdown-item @change="priceChange" v-model="priceSort" :options="priceOption"/>
          <van-dropdown-item @change="orderChange" v-model="orderSort" :options="orderOption"/>
        </van-dropdown-menu>
      </div>
    </div>

    <div class="list" :style="{'height':this.listHeight}">
      <!--list-->
      <div class="item" v-for="(item,index) in list" :key="index" @click="userFans(item)">
        <van-image round width="40" height="40" :src="filterAvatar(item.usertx)"/>
        <div class="message">
          <p>{{item.nickName}}</p>
          <p>
            <span style="color: #19be6b">{{item.userCount}}</span>人&nbsp;&nbsp;
            <span style="color: #ff9900">{{item.orderCount}}</span>单&nbsp;&nbsp;
            <span style="color: #ed4014">{{item.everySum}}</span>元</p>
        </div>

        <div class="time">{{item.time}}</div>
      </div>
    </div>

  </div>
</template>

<script>
import page from "@/mixin/page";
import {fansList, getUserInfo} from '@/api/user'

export default {
  name: "myFans",
  mixins: [page],
  data() {
    return {
      nickName: '',
      list: [],
      user: {},
      userId: '',


      priceSort: '',
      priceOption: [
        {text: '升序', value: 'create_date asc'},
        {text: '降序', value: 'create_date desc'},
        {text: '金额排序', value: ''},
      ],
      orderSort: '',
      orderOption: [
        {text: '升序', value: 'order_count asc'},
        {text: '降序', value: 'order_count desc'},
        {text: '订单排序', value: ''},
      ]
    }
  },
  created() {
    this.getList();
  },
  watch: {
    '$route'() {
      this.userId = this.$route.query.userId;

      //判断路由上是否带userId，如果带了则是查某个具体的用户
      if (this.userId) {
        getUserInfo({
          userId: this.userId
        }).then(data => {
          this.user = data.user
        })
      }
      this.getList();
    }
  },
  methods: {
    getList() {
      let pxOrder = '';

      if(this.priceSort===''&&this.orderSort===''){
         pxOrder = '';
      }else if(this.priceSort===''){
        pxOrder = this.orderSort;
      }else{
        pxOrder = this.priceSort;
      }

      fansList({
        userId: this.userId ? this.userId : this.userInfo.userId,
        nickName: this.nickName,
        pxOrder
      }).then(data => {
        this.list = data.data
      })
    },
    /*点击查看某个粉丝*/
    userFans(item) {
      this.$router.push({
        path: '/layoutNoTab/myFans',
        query: {
          userId: item.userId
        }
      })
    },
    //金额排序
    priceChange() {
      this.orderSort = '';
      this.getList();
    },
    orderChange(){
      this.priceSort = '';
      this.getList();
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
