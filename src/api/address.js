import request from "@/uitls/request";

/*添加地址*/
export function insertAddress(data) {
    return request({
        url: '/address/insertAddress',
        data
    })
}

/*获取地址*/
export function addressList(data) {
    return request({
        url: `/address/${data.userId}/addressUser`
    })
}

/*地址详情*/
export function addressInfo(data) {
    return request({
        url: `/address/${data.addressId}/addressInfo`,
    })
}

/*地址详情*/
export function updateAddress(data) {
    return request({
        url: `/address/upAddress`,
        data
    })
}



