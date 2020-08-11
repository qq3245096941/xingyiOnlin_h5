import request from "@/uitls/request";

/*获取分类列表*/
export function getTypeList() {
    return request({
        url: '/commditytype/typeParam',
    })
}

/*获取分类的详细商品*/
export function getShopAll(data) {
    return request({
        url: '/maShop/shopAll',
        data
    })
}
