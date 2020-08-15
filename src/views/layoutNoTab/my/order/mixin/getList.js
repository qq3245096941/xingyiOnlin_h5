import page from "@/mixin/page";

export default {
    mixins: [page],
    methods: {
        /**
         * @param isReset 重置list。
         */
        getList(isReset=false) {
            if(isReset){
                this.list = [];
                this.currPage = 1;
            }

            this.listApi().then(data => {
                this.total = data.totalCount;
                this.list = [...this.list, ...data.list];
                this.currPage++;
            })
        }
    }
}
