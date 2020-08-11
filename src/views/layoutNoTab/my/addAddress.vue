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
import getCode from "@/uitls/getCodeByAddress";

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
        isDefault: false,
        areaCode: ''
      },
      area,
      addressId: ''
    }
  },
  created() {
    this.addressId = this.$route.query.addressId || '';

    if (this.addressId) {
      addressInfo({
        addressId: this.$route.query.addressId
      }).then(data => {
        let obj = data.data;
        let addressList = getCode([obj.provice, obj.city, obj.county]);

        this.addressInfo = {
          name: obj.userName,
          tel: obj.userTel,
          province: addressList[0],
          city: addressList[1],
          county: addressList[2],
          addressDetail: obj.addDesc,
          isDefault: obj.def === '0',
          areaCode: obj.addressId + ''
        }
      })
    }
  },
  methods: {
    onSave(res) {
      let obj = {
        provice: res.province,
        city: res.city,
        county: res.county,
        addDesc: res.addressDetail,
        userName: res.name,
        userTel: res.tel,
        def: res.isDefault?'0':'1',
        addressId: res.areaCode,
        userId: this.userInfo.userId
      }

      if (this.addressId) {
        updateAddress(obj).then(data => {
          this.$router.go(-1);
        })
      } else {
        insertAddress(obj).then(data => {
          this.$router.go(-1);
        })
      }
    }
  }
}
</script>

<style scoped>

</style>
