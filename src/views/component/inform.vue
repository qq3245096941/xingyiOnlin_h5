<!--公告-->
<template>
  <div ref="content">
    <div ref="header"></div>
    <List :style="{height:listHeight}" :curr-length="list.length" :total="total" @getData="getList">
      <div class="protocol" v-for="(item,index) in list" :key="index">
        <p>{{item.noticeTitle}}</p>
        <p>{{item.time}}</p>
      </div>
    </List>
  </div>
</template>

<script>
import {noticeList} from '@/api/inform'
import page from "@/mixin/page";

export default {
  name: "inform",
  mixins: [page],
  data() {
    return {
      list: []
    }
  },
  methods: {
    getList() {
      noticeList({
        page: this.currPage,
        rows: this.pageSize,
        remark: 1
      }).then(data => {
        this.list = [...this.list, ...data.list];
      })
    }
  }
}
</script>

<style scoped>

</style>
