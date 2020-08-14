import district from "@/views/layoutNoTab/index/district";
import commodityDetails from "@/views/layoutNoTab/index/commodityDetails";
import submitOrder from "@/views/layoutNoTab/index/submitOrder";
import orderDetails from "@/views/layoutNoTab/index/orderDetails";


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
            title: ''
        }
    },
    {
        path: 'submitOrder',
        name: 'submitOrder',
        component: submitOrder,
        meta: {
            title: '确认订单'
        }
    },
    {
        path: 'orderDetails',
        name: 'orderDetails',
        component: orderDetails,
        meta: {
            title: '订单详情'
        }
    }
]
