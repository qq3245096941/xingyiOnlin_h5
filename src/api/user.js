import request from "@/uitls/request";

/*登录*/
export function userLogin(data) {
    return request({
        url: `/maUser/${data.tel}/userInfoTel?userPwd=${data.userPwd}`
    })
}

export function sendCode(data) {
    return request({
        url: '/vcode/send',
        data
    })
}

