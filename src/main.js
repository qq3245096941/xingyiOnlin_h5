import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import moment from 'moment'
import { ImagePreview,Toast } from 'vant';

import agreement from "@/components/agreement";
import List from "@/components/List";
import paymentComponent from "@/components/paymentComponent";
import fileUpload from "@/components/fileUpload";

import localStorage from "@/uitls/localStorage";

Vue.config.productionTip = false

Vue.use(Vant);

Vue.mixin({
    data() {
        return {
            Moment: moment,
            ImagePreview,  //图片查看器
            Toast,   //轻量提示工具
            imgPrefixUrl:'http://39.99.138.150/images/'
        }
    },
    computed:{
        userInfo(){
            return localStorage('get','userInfo');
        }
    }
})


/*购买协议*/
Vue.component('agreement', agreement);
/*加载组件*/
Vue.component('List', List);
/*支付组件*/
Vue.component('paymentComponent', paymentComponent);
/*文件上传组件*/
Vue.component('fileUpload',fileUpload);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
