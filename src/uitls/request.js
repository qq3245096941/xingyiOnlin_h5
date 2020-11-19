import axios from 'axios'
import {Toast} from "vant";

const baseUrl = 'http://shopen.mmdddd.com:8083/famous';

export default function ({url, data, method = 'post'}) {
    Toast.loading({
        message: '加载中...',
        forbidClick: true,
    })

    let formData = new FormData();
    for (let i in data){
        formData.append(i,data[i]);
    }

    return new Promise((resolve,reject) => {
        axios({
            url: baseUrl + url,
            method,
            data:formData
        }).then(data => {
            if (data.status === 200) {
                Toast.clear();
                if(data.data.code!=='0'){
                    Toast(data.data.message);
                    reject(data.data);
                }else{
                    resolve(data.data);
                }
            }
        }).catch(error => {

            console.log(error);
        })
    })
}

