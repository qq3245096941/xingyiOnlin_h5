/*订单*/
import request from "@/uitls/request";

/**
 * 添加订单
 * @param data
 * @returns {Promise | Promise<unknown>}
 */
export function addOrder(data) {
    return request({
        url: '/maOrder/addOrder',
        data
    })
}

/**
 * 订单详情
 * @param data
 * @returns {Promise | Promise<unknown>}
 */
export function orderInfo(data) {
    return request({
        url: `/maOrder/${data.orderId}/searchOrderInfo`,
        data
    })
}

/**
 * 订单列表
 * @param data  orderStat  0代付款 1卖出（仓库）2已上架 3已收货
 * @returns {Promise | Promise<unknown>}
 */
export function orderList(data) {
    return request({
        url: `/maOrder/orderAll`,
        data
    })
}

/**
 * 订单发货
 * @param data {orderId:订单id，addressId:地址id}
 * @returns {Promise | Promise<unknown>}
 */
export function upOrderExp(data) {
    return request({
        url: `/maOrder/upOrderExp`,
        data
    })
}

/**
 * 取消订单
 * @param data {orderId:订单id}
 * @returns {Promise | Promise<unknown>}
 */
export function canalOrder(data) {
    return request({
        url: `/maOrder/${data.orderId}/canalOrder`
    })
}


/**
 * 确认收款
 * @param data {orderId:订单id}
 * @returns {Promise | Promise<unknown>}
 */
export function confimReceipt(data) {
    return request({
        url: `/maOrder/confimReceipt`,
        data
    })
}

/**
 * 重新上架
 * @param data
 * @returns {Promise | Promise<unknown>}
 */
export function upOrderShelf(data) {
    return request({
        url: `/maOrder/upOrderShelf`,
        data
    })
}

/**
 * 粉丝订单(按年分组)
 * @param data
 * @returns {Promise | Promise<unknown>}
 */
export function sourceYearTeamAll(data) {
    return request({
        url: `/maSource/${data.userId}/sourceYearGroup`
    })
}

/**
 * 粉丝订单(按月)
 * @param data
 * @returns {Promise | Promise<unknown>}
 */
export function sourceMonthTeamAll(data) {
    return request({
        url: `/maSource/sourceTeamAll`,
        data
    })
}










