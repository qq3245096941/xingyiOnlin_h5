<template>
  <van-address-edit
      :area-list="areaList"

      show-set-default
      show-search-result

      :show-area="false"

      :address-info="addressInfo"

      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
  />
</template>

<script>
export default {
  name: "addAddress",
  data(){
    return{
      addressInfo:{
        name:'',
        tel:'',
        addressDetail:''
      }
    }
  },
  methods:{
    onSave(){

    }
  }
}
</script>

<style scoped>

</style>
