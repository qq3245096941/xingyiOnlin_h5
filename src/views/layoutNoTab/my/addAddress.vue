<template>
  <van-address-edit
      :area-list="area"
      show-set-default
      show-search-result
      show-area
      :address-info="addressInfo"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
  />
</template>

<script>
import {insertAddress, updateAddress, addressInfo} from '@/api/address'
import area from '@/uitls/area'

export default {
  name: "addAddress",
  data() {
    return {
      addressInfo: {
        name: '',
        tel: '',
        province: '',
        city: '',
        county: '',
        addressDetail: '',
        isDefault: false
      },
      area
    }
  },
  created() {
    if (this.$route.query.addressId) {
      addressInfo({
        addressId: this.$route.query.addressId
      }).then(data => {
        let obj = data.data;

        this.addressInfo = {
          name: obj.userName,
          tel: obj.userTel,
          province: obj.provice,
          city: obj.city,
          county: obj.county,
          addressDetail: obj.addDesc,
          isDefault: obj.def === '0'
        }
      })
    }
  },
  methods: {
    onSave(res) {
      insertAddress({
        provice: res.province,
        city: res.city,
        county: res.county,
        addDesc: res.addressDetail,
        userName: res.name,
        userTel: res.tel,
        isDefault: res.isDefault,
        addressId: res.areaCode,
        userId: this.userInfo.userId
      }).then(data => {
        this.$router.go(-1);
      })
    }
  }
}
</script>

<style scoped>

</style>
