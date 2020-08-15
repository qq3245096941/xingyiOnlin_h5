<template>
  <div>
    <van-address-list
        v-model="index"
        :list="list"
        default-tag-text="默认"
        @add="onAdd"
        @edit="onEdit"
        @select="select"
    />

    <van-empty v-show="list.length===0" description="暂无地址"/>

    <van-action-sheet v-model="isShow" :actions="actions" @select="actionSelect"/>
  </div>

</template>

<script>
import {addressList, deleteAddress} from '@/api/address'

export default {
  name: "addressManager",
  data() {
    return {
      list: [],
      index: '',  //选中的地址id
      isShow: false,
      actions: [
        {name: '选择地址', index: 2},
        {name: '删除地址', index: 1},
        {name: '取消'}
      ],
    }
  },
  watch: {
    isShow(newValue) {
      if (!newValue) {
        this.index = '';
      }
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
        query: {
          addressId: res.id
        }
      })
    },
    select(res) {
      this.index = res.addressId;
      this.isShow = true;
    },
    /*删除选中的数据*/
    actionSelect(res) {
      switch (res.index) {
        case 1:
          deleteAddress({
            addressId: this.index
          }).then(data => {
            this.getList();
          })
          break;
        case 2:
          this.$eventBus.$emit('getAddress',this.index);
          this.$router.go(-1);
          break;
      }

      this.isShow = false;
    },
    getList() {
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
  },
  mounted() {
    this.getList();
  }
}
</script>

<style scoped lang="scss">

</style>
