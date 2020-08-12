import service from "@/views/layoutNoTab/my/service";
import addressManager from "@/views/layoutNoTab/my/addressManager";
import addAddress from "@/views/layoutNoTab/my/addAddress";
import gatheringManager from "@/views/layoutNoTab/my/gatheringManager";
import myPromotion from "@/views/layoutNoTab/my/extension/myPromotion";
import businessCard from "@/views/layoutNoTab/my/extension/businessCard";
import listOfPromoters from "@/views/layoutNoTab/my/extension/listOfPromoters";
import promoterStatistics from "@/views/layoutNoTab/my/extension/promoterStatistics";
import withdrawDeposit from "@/views/layoutNoTab/my/extension/withdrawDeposit";
import personalCenter from "@/views/layoutNoTab/my/personalCenter";
import orderAll from "@/views/layoutNoTab/my/order/orderAll";
import deliverOrder from "@/views/layoutNoTab/my/deliverOrder";
import editUserInfo from "@/views/layoutNoTab/my/user/editUserInfo";
import bankCardEdit from "@/views/layoutNoTab/my/bankCardEdit";

export default [
    {
        path: 'editUserInfo',
        name: 'editUserInfo',
        component: editUserInfo,
        meta: {
            title: '修改信息'
        }
    },
    {
        path: 'bankCardEdit',
        name: 'bankCardEdit',
        component: bankCardEdit,
        meta: {
            title: '编辑银行卡'
        }
    },
    {
        path: 'service',
        name: 'service',
        component: service,
        meta: {
            title: '客服'
        }
    },
    {
        path: 'personalCenter',
        name: 'personalCenter',
        component: personalCenter,
        meta: {
            title: '个人中心'
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
            color: '#ffffff'
        }
    },
    {
        path: 'businessCard',
        name: 'businessCard',
        component: businessCard,
        meta: {
            title: '推广名片',
            color: '#ffffff'
        }
    },
    {
        path: 'listOfPromoters',
        name: 'listOfPromoters',
        component: listOfPromoters,  //推广人排行
        meta: {
            title: '推广人统计',
            color: '#ffffff'
        }
    },
    {
        path: 'promoterStatistics',
        name: 'promoterStatistics',
        component: promoterStatistics,  //推广人统计
        meta: {
            title: '推广人统计',
            color: '#ffffff'
        }
    },
    {
        path: 'withdrawDeposit',
        name: 'withdrawDeposit',
        component: withdrawDeposit,  //立刻提现
        meta: {
            title: '立刻提现'
        }
    },
    {
        path: 'orderAll',
        name: 'orderAll',
        component: orderAll,
        meta: {
            title: '全部订单'
        }
    },
    {
        path: 'deliverOrder',
        name: 'deliverOrder',
        component: deliverOrder,
        meta: {
            title: '发货订单'
        }
    }
]
