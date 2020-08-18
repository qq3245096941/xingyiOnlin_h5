/*系统变量*/
import request from "@/uitls/request";

export function configAll() {
    return request({
        url: '/config/configAll',
    })
}

export function configInfo(data) {
    return request({
        url: '/config/configInfo',
        data
    })
}
