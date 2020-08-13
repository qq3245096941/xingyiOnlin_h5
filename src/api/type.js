import request from "@/uitls/request";

/*获取分类列表*/
export function getTypeList() {
    return request({
        url: '/commditytype/typeParam',
    })
}

export function typeInfo(data) {
    return request({
        url: `/commditytype/${data.commdityTypeId}/commdityTypeInfo`,
    })
}

