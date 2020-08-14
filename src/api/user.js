import request from "@/uitls/request";

/*注册*/
export function registerUser(data) {
    return request({
        url: `/maUser/loginUser`,
        data
    })
}

/*登录*/
export function userLogin(data) {
    return request({
        url: `/maUser/${data.tel}/userInfoTel`,
        data:{
            userPwd:data.userPwd
        }
    })
}

/*发送短信*/
export function sendCode(data) {
    return request({
        url: '/vcode/send',
        data
    })
}

/*修改用户信息*/
export function updateUser(data) {
    return request({
        url: '/maUser/upUserInfo',
        data
    })
}

/*获取用户信息*/
export function getUserInfo(data){
    return request({
        url: `/maUser/${data.userId}/userInfo`
    })
}

