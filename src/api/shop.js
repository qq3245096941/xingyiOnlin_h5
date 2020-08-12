import request from "@/uitls/request";

/*获取商品列表*/
export function getShopAll(data) {
    return request({
        url: '/maShop/shopAll',
        data
    })
}

/*获取商品详情*/
export function shopInfo(data) {
    return request({
        url: `/maShop/${data.shopId}/shopInfo`
    })
}
