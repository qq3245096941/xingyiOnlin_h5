<!--商品详情-->
<template>
  <div class="content">
    <img src="../../../assets/img/haibao.svg" alt="">

    <div class="body">
      <p>A-1：景泰蓝</p>
      <p>售价：<span class="price">￥10000.00</span></p>

      <div class="userMessage">
        <p>藏品所有者</p>
        <p class="nickname">张三</p>
        <p class="describe">
          工作描述是指在该职位上员工实际工作业务流程及授权范围。它是以"工作"为中心对岗位进行全面、系统、深入的说明，为工作评价、工作分类提供依据。
          在简历中的工作描述部分，则概称为工作经验的描述作经验有多有少，时间有长有短，但是最关键的是从你的工作描述中应该可以体现你的成长以及进步。
          二）效度：指工作描述的有效程度，效度越高，越能真实反映工作本身的特征；方向上的有效。检验方法是看在以下三个使用目标上所达到的程度：1、获
          得其他信息产品，如开发工作说明书、资格说明书与职务说明书的有效性；2、辅助人力资源专家工作的有效性；3、作为人力资源问题研究与检验工具的
          有 效性。长期鉴定方法：1、从招聘者、培训者、直接主管和其他工作描述的最终使用者那里获得对工作描述有效性的评价；2、考察人力资源管理的产
          出并提取与效度有关的指标（具实质性）。
        </p>
      </div>
    </div>

    <van-button class="btn" block type="danger" v-if="isStart===false">
      还未开始(
      <van-count-down style="color: #fff;display: inline" :time="timeRemaining" @finish="finish"/>  <!--//默认毫秒-->
      )
    </van-button>

    <van-button v-else class="btn" block type="danger" @click="purchase">立即抢购</van-button>

    <!--购买协议-->
    <agreement :isShow.sync="isShow" @look="submitOrder"></agreement>
  </div>
</template>

<script>
export default {
  name: "commodityDetails",
  data() {
    return {
      isShow: false,
      timeRemaining: 0,
      isStart: false  //是否开始抢购
    }
  },
  methods: {
    purchase() {
      this.isShow = true;
    },
    submitOrder() {
      this.$router.push({
        path: '/layoutNoTab/submitOrder'
      })
    },
    /*倒计时结束时*/
    finish() {
      this.isStart = true;
    }
  },
  mounted() {
    this.timeRemaining = 2 * 1000;
  }
}
</script>

<style scoped lang="scss">
.content {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;

  .price {
    color: #ed4014;
    font-weight: bold;
  }

  img {
    display: block;
    width: 100%;
  }

  .body {
    border-radius: 10px;
    background: #fff;
    top: -50px;
    padding: 10px 20px;
    margin: 0 30px;
    position: relative;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);

    .userMessage {
      display: flex;
      flex-direction: column;
      align-items: center;

      .describe {
        font-size: 15px;
      }
    }
  }

  .btn {
    z-index: 1000;
    position: sticky;
    bottom: 0;
    width: 100%;
  }
}
</style>
