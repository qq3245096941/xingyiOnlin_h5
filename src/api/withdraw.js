import request from "@/uitls/request";

/*提现列表*/
export function withAll(data) {
    return request({
        url: '/wal/withAll',
        data
    })
}

export function addWith(data) {
    return request({
        url: '/wal/addWith',
        data
    })
}
