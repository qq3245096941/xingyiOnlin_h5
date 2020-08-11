<template>
  <van-address-list
      :list="list"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
  />
</template>

<script>
import {addressList} from '@/api/address'

export default {
  name: "addressManager",
  data() {
    return {
      list: []
    }
  },
  methods: {
    onAdd() {
      this.$router.push({
        path: '/layoutNoTab/addAddress'
      })
    },
    onEdit(res) {
      this.$router.push({
        path: '/layoutNoTab/addAddress',
        query:{
          addressId:res.id
        }
      })
    }
  },
  mounted() {
    addressList({
      userId: this.userInfo.userId
    }).then(data => {
      this.list = data.list.map(item => {
        return {
          id: item.addressId,
          name: item.userName,
          tel: item.userTel,
          address: item.provice + item.city + item.county + item.addDesc,
          isDefault: item.def === "0"
        }
      });
    })
  }
}
</script>

<style scoped lang="scss">

</style>
