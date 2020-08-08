import service from "@/views/layoutNoTab/my/service";
import addressManager from "@/views/layoutNoTab/my/addressManager";
import addAddress from "@/views/layoutNoTab/my/addAddress";
import gatheringManager from "@/views/layoutNoTab/my/gatheringManager";
import myPromotion from "@/views/layoutNoTab/my/extension/myPromotion";
import businessCard from "@/views/layoutNoTab/my/extension/businessCard";
import listOfPromoters from "@/views/layoutNoTab/my/extension/listOfPromoters";

export default [
    {
        path: 'service',
        name: 'service',
        component: service,
        meta: {
            title: '客服'
        }
    },
    {
        path: 'service',
        name: 'service',
        component: service,
        meta: {
            title: '全部订单'
        }
    },
    {
        path: 'addressManager',
        name: 'addressManager',
        component: addressManager,
        meta: {
            title: '我的地址'
        }
    },
    {
        path: 'addAddress',
        name: 'addAddress',
        component: addAddress,
        meta: {
            title: '添加地址'
        }
    },
    {
        path: 'gatheringManager',
        name: 'gatheringManager',
        component: gatheringManager,
        meta: {
            title: '收款管理'
        }
    },
    {
        path: 'myPromotion',
        name: 'myPromotion',
        component: myPromotion,
        meta: {
            title: '我的推广',
            color:'#ffffff'
        }
    },
    {
        path: 'businessCard',
        name: 'businessCard',
        component: businessCard,
        meta: {
            title: '推广名片'
        }
    },
    {
        path: 'listOfPromoters',
        name: 'listOfPromoters',
        component: listOfPromoters,
        meta: {
            title: ''
        }
    },
]
