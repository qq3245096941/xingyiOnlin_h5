import page from "@/mixin/page";
import chanpintu from '@/assets/img/main/chanpintu.svg'

export default {
    mixins: [page],
    data() {
        return {
            total: 40,
            list: []
        }
    },
    methods: {
        getList() {
            setTimeout(() => {
                let list = Array.from({length: this.pageSize}).map(item => {
                    return {
                        img:chanpintu,
                        number:'A-111',
                        title:'《放下布袋 何等自在》',
                        price:'00.00',
                        time:'2020-08-08 12:00:00'
                    }
                })

                this.list = [...this.list, ...list];
            }, 1000)
        }
    }
}
