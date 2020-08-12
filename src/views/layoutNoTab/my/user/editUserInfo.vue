<template>
    <van-form @submit="onSubmit">
      <van-field v-model="value"  :label="label" :rules="[{ required: true, message: '请填写信息' }]"/>
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
</template>

<script>
import {updateUser} from '@/api/user'

export default {
  name: "editUserInfo",
  data(){
    return{
      value:'',
      label:'',
      type:''
    }
  },
  mounted() {
    this.value = this.$route.query.value;
    this.type = this.$route.query.type;

    switch (this.type){
      case 'nickName':
        this.label = '昵称'
        break;
      case 'realName':
        this.label = '姓名'
        break;
      case 'userTel':
        this.label = '电话'
        break;
    }
  },
  methods:{
    onSubmit(){
      updateUser({
        userId:this.userInfo.userId,
        [this.type]:this.value
      }).then(data=>{
        this.$router.go(-1)
      })
    }
  }
}
</script>

<style scoped>

</style>
