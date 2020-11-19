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
      <van-cell title="姓名" :value="realName" @click="$router.push(
                    {
                      path:'/layoutNoTab/editUserInfo',
                      query:{
                        value:realName,
                        type:'realName'
                      }
                    })"/>
      <van-cell title="地址" :value="address"/>
      <van-cell title="手机号" :value="phone"/>
      <van-cell title="密码" :value="userPwd" @click="$router.push(
                    {
                      path:'/layoutNoTab/editUserInfo',
                      query:{
                        value:userPwd,
                        type:'userPwd'
                      }
                    })"/>
    </van-cell-group>
  </div>
</template>

<script>
import { getUserInfo, updateUser } from '@/api/user'
import localStorage from '@/uitls/localStorage'
import { addressList } from '@/api/address'

export default {
  name: 'personalCenter',
  data () {
    return {
      avatar: '',
      nickname: '',
      realName: '',
      phone: '',
      address: '',
      userPwd:''
    }
  },
  mounted () {
    this.getUser()
  },

  methods: {
    /*获取图片*/
    getImgUrl (res) {
      updateUser({
        userId: this.userInfo.userId,
        usertx: res
      }).then(data => {
        this.getUser()
      })
    },
    getUser () {
      getUserInfo({
        userId: this.userInfo.userId
      }).then(data => {
        let user = data.user

        this.avatar = this.filterAvatar(user.usertx)
        this.realName = user.realName

        this.nickname = user.nickName
        this.phone = user.userTel

        this.userPwd = user.userPwd;

        this.address = '';

        // addressList({
        //   userId: this.userInfo.userId,
        //   def:1
        // }).then(address => {
        //   this.address = address.list[0].provice + address.list[0].city + address.list[0].county + address.list[0].addDesc
        // })

        localStorage('set', 'userInfo', user)
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
