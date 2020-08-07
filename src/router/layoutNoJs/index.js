import district from "@/views/layoutNoTab/index/district";
import commodityDetails from "@/views/layoutNoTab/index/commodityDetails";


export default [
    {
        path: 'district',
        name: 'district',
        component: district,
        meta: {
            title: '商品列表'
        }
    },
    {
        path: 'commodityDetails',
        name: 'commodityDetails',
        component: commodityDetails,
        meta: {
            title: '商品详情'
        }
    },

]
