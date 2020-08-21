import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import moment from 'moment'
import {ImagePreview, Toast, Dialog} from 'vant';

import agreement from "@/components/agreement";
import List from "@/components/List";
import paymentComponent from "@/components/paymentComponent";
import fileUpload from "@/components/fileUpload";
import localStorage from "@/uitls/localStorage";

Vue.config.productionTip = false
Vue.use(Vant);

Number.prototype.toFixed = function (d) {
    var s = this + "";
    if (!d) d = 0;
    if (s.indexOf(".") == -1) s += ".";
    s += new Array(d + 1).join("0");
    if (new RegExp("^(-|\\+)?(\\d+(\\.\\d{0," + (d + 1) + "})?)\\d*$").test(s)) {
        var s = "0" + RegExp.$2, pm = RegExp.$1, a = RegExp.$3.length, b = true;
        if (a == d + 2) {
            a = s.match(/\d/g);
            if (parseInt(a[a.length - 1]) > 4) {
                for (var i = a.length - 2; i >= 0; i--) {
                    a[i] = parseInt(a[i]) + 1;
                    if (a[i] == 10) {
                        a[i] = 0;
                        b = i != 1;
                    } else break;
                }
            }
            s = a.join("").replace(new RegExp("(\\d+)(\\d{" + d + "})\\d$"), "$1.$2");

        }
        if (b) s = s.substr(1);
        return (pm + s).replace(/\.$/, "");
    }
    return this + "";
};


Vue.prototype.$eventBus = new Vue({
    data: {
        savePath: ''  //记录登录之前的路径，用于在登录之后直接跳转到指定页面
    }
}); //事件总线

Vue.mixin({
    data() {
        return {
            Moment: moment,
            ImagePreview,  //图片查看器
            Toast,   //轻量提示工具
            Dialog,
            imgPrefixUrl: 'http://39.99.138.150/images/'
        }
    },
    computed: {
        userInfo() {
            return localStorage('get', 'userInfo');
        }
    },
    methods: {
        /*过滤头像*/
        filterAvatar(url) {
            if (!url) return;
            if (url.indexOf('http://') === 0 || url.indexOf('https://') === 0) {
                return url;
            } else {
                return this.imgPrefixUrl + url;
            }
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
Vue.component('fileUpload', fileUpload);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
