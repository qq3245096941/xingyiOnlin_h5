<!--公告-->
<template>
  <div ref="content">
    <div class="header" ref="header"></div>
    <List :curr-length="list.length" :total="total" @getData="getList">
      <div class="protocol" v-for="(item,index) in list" :key="index" @click="enterPro(item.noticeId)">
        <p class="title">{{item.noticeTitle}}</p>
        <p class="time">{{item.createDate}}</p>
      </div>
    </List>
    <van-empty v-show="list.length===0" description="暂无数据"/>

    <van-popup v-model="isShow" position="bottom" @close="close" closeable round>
      <div>
        <h3 style="text-align: center">{{notice.noticeTitle}}</h3>
        <div style="padding: 20px;height: 300px;overflow: auto" v-html="notice.noticeContent"></div>
      </div>
    </van-popup>

  </div>
</template>

<script>
import {noticeList,noticeInfo} from '@/api/inform'
import page from "@/mixin/page";

export default {
  name: "inform",
  mixins: [page],
  props: {
    remarkType: {
      type: Number,
      default: 0  //0协议，1公告
    }
  },
  data() {
    return {
      isShow:false,
      noticeId:'',
      notice:{}  //info信息
    }
  },
  watch:{
    isShow(newValue){
      if(newValue){
        /*查询info*/
        noticeInfo({
          noticeId:this.noticeId
        }).then(data=>{
          this.notice = data.data;
        })
      }
    }
  },
  methods: {
    /*查看数据*/
    enterPro(noticeId){
      this.noticeId = noticeId;
      this.isShow = true;
      this.notice = {}
    },
    close(){
      this.noticeId = '';
      this.isShow = false;
    },
    getList() {
      noticeList({
        page: this.currPage,
        rows: this.pageSize,
        remark: this.remarkType
      }).then(data => {
        this.currPage++;
        this.list = [...this.list, ...data.list];
      })
    }
  }
}
</script>

<style scoped lang="scss">
.protocol {
  display: flex;
  align-items: center;
  padding: 10px 20px;
  border: 1px solid #e8eaec;

  p {
    flex: 1;
  }

  .title {
    font-size: 15px;
    color: #17233d;
    font-weight: bold;
  }

  .time {
    text-align: right;
    color: #808695;
    font-size: 13px;
  }
}
</style>
