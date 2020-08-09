<template>
  <div>
    <van-cell-group class="card">
      <van-cell title="头像">
        <template #right-icon>
          <van-uploader>
            <van-image width="40" height="40" round :src="avatar"/>
          </van-uploader>
        </template>
      </van-cell>
      <van-cell title="昵称" :value="nickname" @click="edit('nickname')"/>
      <van-cell title="姓名" :value="name" @click="edit('name')"/>
      <van-cell title="手机号" :value="phone" @click="edit('phone')"/>
    </van-cell-group>

    <van-dialog v-model="pop.isNicknameShow" title="修改昵称" show-cancel-button>
      <van-field type="text" placeholder="请输入昵称" v-model="pop.nickname"/>
    </van-dialog>

    <van-dialog v-model="pop.isNameShow" title="修改姓名" show-cancel-button>
      <van-field type="text" placeholder="请输入姓名" v-model="pop.name"/>
    </van-dialog>

    <van-dialog v-model="pop.isPhoneShow" title="修改电话" show-cancel-button>
      <van-field type="phone" placeholder="请输入电话" v-model="pop.phone"/>
    </van-dialog>
  </div>
</template>

<script>
export default {
  name: "personalCenter",
  data() {
    return {
      avatar: 'https://img.yzcdn.cn/vant/cat.jpeg',
      nickname: '123',
      name: '张三',
      phone: 15623554858,

      pop: {
        isNicknameShow: false,
        isNameShow: false,
        isPhoneShow: false,
        nickname: '',
        name: '',
        phone: '',
      }
    }
  },
  methods: {
    edit(type) {
      switch (type) {
        case 'phone':
          this.pop.isPhoneShow = true;
          break;
        case 'name':
          this.pop.isNameShow = true;
          break;
        default:
          this.pop.isNicknameShow = true;
      }
    }
  }
}
</script>

<style scoped>

</style>
