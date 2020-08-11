import area from "@/uitls/area";

/**
 * @param arr  arr[0]省，arr[1]市，arr[2]区
 */
export default function getCode(arr){
    let list = [];

    for(let key in area.province_list){
        if(area.province_list[key]===arr[0]){
            list.push(key);
            break;
        }
    }

    /*市*/
    for(let key in area.city_list){
        if(area.city_list[key]===arr[1]){
            list.push(key);
            break;
        }
    }

    /*区*/
    for(let key in area.county_list){
        if(area.county_list[key]===arr[2]){
            list.push(key);
            break;
        }
    }

    return list;
}
