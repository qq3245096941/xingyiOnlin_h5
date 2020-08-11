import request from "@/uitls/request";

/*授权登录*/
export function userLogin(data) {
    return request({
        url: '/maUser/loginUser',
        data
    })
}
