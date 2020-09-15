import request from "@/uitls/request";

/*填写*/
export function addPay(data) {
    return request({
        url: '/mapay/addPay',
        data
    })
}

//普通用户收款码
export function payList(data) {
    return request({
        url: '/mapay/payUser',
        data
    })
}

//商品收款码
export function shopPays(data) {
    return request({
        url: '/mashoppay/shopPays',
        data
    })
}

//分类收款码
export function typePays(data) {
    return request({
        url: '/maTypepay/shopPays',
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


