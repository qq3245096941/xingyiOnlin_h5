export default {
    data() {
        return {
            contentHeight: 0,
            headerHeight: 0,
            listHeight: 0,
            pageSize:20,
            currPage:1,
            total:0,
            list:[]
        }
    },
    methods:{
      getListHeight(){
          let contentEle = this.$refs.content;

          contentEle.style.width = '100%';
          contentEle.style.height = '100%';

          this.contentHeight = contentEle.clientHeight;
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
