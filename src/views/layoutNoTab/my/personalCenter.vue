<template>
  <div class="content">
    <van-cell-group class="card">
      <van-cell title="头像">
        <template #right-icon>
          <fileUpload @change="getImgUrl">
            <van-image width="40" height="40" round :src="avatar"/>
          </fileUpload>
        </template>
      </van-cell>
      <van-cell title="昵称" :value="nickname" @click="$router.push(
                    {
                      path:'/layoutNoTab/editUserInfo',
                      query:{
                        value:nickname,
                        type:'nickName'
                      }
                    })"/>
      <van-cell title="姓名" :value="name" @click="$router.push(
                    {
                      path:'/layoutNoTab/editUserInfo',
                      query:{
                        value:name,
                        type:'name'
                      }
                    })"/>
      <van-cell title="手机号" :value="phone" @click="$router.push(
                    {
                      path:'/layoutNoTab/editUserInfo',
                      query:{
                        value:phone,
                        type:'userTel'
                      }
                    })"/>
    </van-cell-group>
  </div>
</template>

<script>
import {getUserInfo, updateUser} from '@/api/user'
import localStorage from "@/uitls/localStorage";

export default {
  name: "personalCenter",
  data() {
    return {
      avatar: '',
      nickname: '',
      name: '张三',
      phone: '',
    }
  },
  mounted() {
    this.getUser();
  },

  methods: {
    /*获取图片*/
    getImgUrl(res) {
      updateUser({
        userId: this.userInfo.userId,
        usertx: res
      }).then(data => {
        this.getUser();
      })
    },
    getUser() {
      getUserInfo({
        userId: this.userInfo.userId
      }).then(data => {
        let user = data.user;

        this.avatar = this.filterAvatar(user.usertx);

        this.nickname = user.nickName;
        this.phone = user.userTel;

        localStorage('set', 'userInfo', user);
      })
    }
  }
}
</script>

<style scoped>
.content {
  width: 100%;
  height: 100%;
}
</style>
