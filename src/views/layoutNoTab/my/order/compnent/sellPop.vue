<template>
  <van-popup v-model="isPopShow" position="bottom" @close="close" round closeable>
    <div style="padding: 20px;font-size: 15px">
      <div class="topPrice">
        <p>委托费用：<span style="color: #ff9900">00.00</span></p>
        <p>预计费用：<span style="color: #ff9900">00.00</span></p>
      </div>
      <div style="text-align: center;margin:10px 0">出售价格：<span style="color: #ed4014">00.00</span></div>
      <div class="hen"></div>
      <paymentComponent></paymentComponent>

      <van-button type="danger" block round style="margin-top: 10px">提交委托申请</van-button>
    </div>
  </van-popup>
</template>

<script>
export default {
  name: "sellPop",
  props:{
    isShow:{
      type:Boolean,
      required:false
    }
  },
  data(){
    return {
      isPopShow:false
    }
  },
  watch:{
    isShow(newValue){
      this.isPopShow = newValue;
    }
  },
  methods:{
    close(){
      this.$emit('update:isShow',false);
    }
  }
}
</script>

<style scoped lang="scss">
    .topPrice{
      display: flex;
      align-content: center;

      p{
        flex: 1;
        text-align: center;
      }
    }
</style>
