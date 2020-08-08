<template>
  <van-address-list
      :list="list"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
  />
</template>

<script>
export default {
  name: "addressManager",
  data(){
    return{
      list:[]
    }
  },
  methods:{
    onAdd(){
      this.$router.push({
        path:'/layoutNoTab/addAddress'
      })
    },
    onEdit(){

    }
  },
  mounted() {
    this.list = Array.from({length:5}).map((item,index)=>{
      return {
        id:index,
        name:'张三',
        tel:'15623554858',
        address:'武汉市洪山区关山大道关山春晓',
        isDefault:true
      }
    })
  }
}
</script>

<style scoped lang="scss">

</style>
