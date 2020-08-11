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
