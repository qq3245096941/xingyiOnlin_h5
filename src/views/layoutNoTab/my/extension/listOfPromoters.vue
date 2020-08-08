<!--推广人排行-->
<template>
  <div class="content">

    <div class="topBody">
      <img :src="require('@/static/img/tuiguangTop.png')" alt="">
      <p class="time">截止日期：2020年11月1日</p>
    </div>

    <div class="bottomBody">
      <img :src="require('@/static/img/tuiguangBottom.png')" alt="">
      <div class="box">
        <div class="list">
          <div class="item" v-for="item in list">
            <p>{{item.rankIng}}</p>
            <p><van-image round width="15" height="15" :src="item.icon" />{{item.nickname}}</p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import avatar from '@/assets/img/my/avatar.jpg';

export default {
  name: "ListOfPromoters",
  data(){
    return{
      list:[]
    }
  },
  mounted() {
    this.list = Array.from({length:8}).map((item,index)=>{
      return {
        ranking:index,
        icon:avatar,
        nickname:'张三'
      }
    })
  }
}
</script>

<style scoped lang="scss">
  .content{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;

    .topBody{
      position: relative;

      img{
        display: block;
        width: 100%;
      }

      p{
        position: absolute;
        bottom: 17px;
        text-align: center;
        width: 100%;
        font-size: 13px;
        color: #fff;
      }
    }

    .bottomBody{
      position: relative;
      top: -5px;

      img{
        display: block;
        width: 100%;
      }

      .box{
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        padding: 4px 20px 20px 20px;

        .list{
          background: #fff;
          height: 250px;
          overflow: auto;

          .item{
            display: flex;
            align-items: center;
          }
        }
      }
    }
  }
</style>
