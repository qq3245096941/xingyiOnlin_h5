export default {
    data() {
        return {
            contentHeight: 0,
            headerHeight: 0,
            listHeight: 0,
            pageSize:20,
            currPage:1
        }
    },
    methods:{
      getListHeight(){
          this.contentHeight = this.$refs.content.clientHeight;
          this.headerHeight = this.$refs.header.clientHeight;
          this.listHeight = `${this.contentHeight - this.headerHeight}px`;
      }
    },
    mounted() {
        this.getListHeight();
    },
    updated() {
        this.getListHeight();
    },
}
