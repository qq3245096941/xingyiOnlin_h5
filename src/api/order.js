/*订单*/
import request from "@/uitls/request";

export function addOrder(data) {
    return request({
        url: '/maOrder/addOrder',
        data
    })
}
