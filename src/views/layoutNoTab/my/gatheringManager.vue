<!--收款中心-->
<template>
  <div class="content">
    <template v-for="(item,index) in list">
      <div class="item">
        <img :src="item.icon" alt="">
        <div class="btns">
          <fileUpload v-if="index===2">
            <span @click="edit(index)">修改</span>
          </fileUpload >

          <span v-else @click="edit(index)">修改</span>
          <span @click="look">查看</span>
        </div>
      </div>
      <van-divider v-if="index<2"/>
    </template>
  </div>
</template>

<script>
import zhifubao from '../../../assets/img/my/zhifubao.svg';
import weiixn from '../../../assets/img/my/weiixn.svg';
import yinhangka from '../../../assets/img/my/yinhangka.svg';

export default {
  name: "gatheringManager",
  data() {
    return {
      list: [
        {
          icon: zhifubao
        },
        {
          icon: weiixn
        },
        {
          icon: yinhangka
        }
      ]
    }

  },
  methods: {
    look() {
      this.ImagePreview([
        'https://img.yzcdn.cn/vant/apple-1.jpg'
      ]);
    },
    edit(index) {
      if (index === 0 || index === 1) {

      }
    }
  }
}
</script>

<style scoped lang="scss">
.content {
  margin: 10px;
  background: #fff;
  padding: 10px 20px 20px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);

  .item {
    display: flex;
    align-items: center;
    margin-top: 10px;

    .btns {
      flex: 1;
      text-align: right;

      span {
        margin-right: 10px;
      }
    }
  }
}
</style>
