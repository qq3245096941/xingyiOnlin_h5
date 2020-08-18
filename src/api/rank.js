import request from "@/uitls/request";

/*推广人排行*/
export function maRanks(data) {
    return request({
        url: '/rank/maRanks',
        data
    })
}

/*佣金排行*/
export function sourceAll(data) {
    return request({
        url: '/maSource/sourceAll',
        data
    })
}



