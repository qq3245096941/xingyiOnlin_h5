import request from "@/uitls/request";

/*填写*/
export function addPay(data) {
    return request({
        url: '/mapay/addPay',
        data
    })
}

export function payList(data) {
    return request({
        url: '/mapay/payUser',
        data
    })
}

/*删除*/
export function deletePay(data) {
    return request({
        url: `/mapay/${data.payId}/delPay`,
    })
}

/*更新支付*/
export function updatePay(data) {
    return request({
        url: `/mapay/upPay`,
        data
    })
}

/*支付详情*/
export function payInfo(data) {
    return request({
        url: `/mapay/${data.payId}/payInfo`
    })
}


