/*订单*/
import request from "@/uitls/request";

export function addOrder(data) {
    return request({
        url: '/maOrder/addOrder',
        data
    })
}

export function orderInfo(data) {
    return request({
        url: `/maOrder/${data.orderId}/searchOrderInfo`,
        data
    })
}

/**
 * @param data  orderStat  0代付款 1卖出（仓库）2已上架 3已收货
 * @returns {Promise | Promise<unknown>}
 */
export function orderList(data) {
    return request({
        url: `/maOrder/orderAll`,
        data
    })
}




