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

      <List class="list" :style="{height:contentHeight-headerHeight-40+'px'}" :total="40" :curr-length="list.length"
            @getData="getList">
        <div v-for="item in list">
          <div  class="item" @click="item.isShow = !item.isShow">
            <p>{{item.time}}</p>
            <p>{{item.price}}</p>
            <p>{{item.source}}<van-icon style="margin-left: 5px" size="12" :name="item.isShow?'arrow-up':'arrow-down'" /></p>
          </div>

          <!--子类-->
          <div class="item" v-show="item.isShow" v-for="childrenItem in item.children" style="background: #f8f8f9">
            <p>{{childrenItem.time}}</p>
            <p>{{childrenItem.price}}</p>
            <p>{{childrenItem.source}}</p>
          </div>
        </div>
      </List>
    </div>

    <div class="detail">
      <p>佣金明细</p>
      <p>￥00.00</p>
    </div>


  </div>
</template>

<script>
import page from "@/mixin/page";

export default {
  name: "myWallet",
  mixins: [page],
  data() {
    return {
      list: []
    }
  },
  methods: {
    getList() {
      setTimeout(() => {
        let list = Array.from({length: 10}).map(item => {
          return {
            time: '08/09',
            price: '+00.00',
            source: '推广佣金',
            isShow:false,
            children:[
              {
                time: '08/09',
                price: '+00.00',
                source: '推广佣金',
              },
              {
                time: '08/09',
                price: '+00.00',
                source: '推广佣金',
              },
            ]
          }
        })

        this.list = [...this.list, ...list]
      }, 1000)
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

  .detail{
    position: absolute;
    top: 13%;
    color: #fff;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;

    p{
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
