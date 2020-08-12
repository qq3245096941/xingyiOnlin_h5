import request from "@/uitls/request";

/*获取*/
export function bannerAll(data) {
    return request({
        url: '/banner/bannerAll',
        data
    })
}



