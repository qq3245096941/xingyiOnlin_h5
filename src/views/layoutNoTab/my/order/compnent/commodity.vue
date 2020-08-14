<template>
  <div>
    <div class="content" >
      <van-image fit="cover" width="100" height="100" :src="getFirstImg(comm.shopLogo)" />
      <img  alt="">
      <div class="message">
        <p>{{comm.shopName}}</p>
        <p>{{comm.title}}</p>
        <p>售价：<span class="price">{{'￥' + comm.price}}</span></p>
      </div>
    </div>

    <div class="btns">
      <slot></slot>
    </div>

    <div class="time">
      {{comm.time}}
    </div>
  </div>
</template>

<script>
export default {
  name: "commodity",
  props: {
    comm: {
      type: Object,
      required: true
    }
  },
  methods:{
    getFirstImg(res){
      return this.imgPrefixUrl + res.split(",")[0]
    }
  }
}
</script>

<style scoped lang="scss">
.content {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e8eaec;

  img {
    height: 70px;

  }

  .message {
    font-size: 14px;
    margin-left: 10px;

    .price {
      color: #ed4014;
      font-weight: bold;
      font-size: 18px;
    }
  }
}

.btns{
  margin: 10px 0;
}

.time{
  font-size: 13px;
}
</style>
