import request from "@/uitls/request";

/*获取商品列表*/
export function maRanks(data) {
    return request({
        url: '/rank/maRanks',
        data
    })
}
