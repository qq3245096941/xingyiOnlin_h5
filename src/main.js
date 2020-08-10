import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import moment from 'moment'
import { ImagePreview } from 'vant';

import agreement from "@/components/agreement";
import List from "@/components/List";
import paymentComponent from "@/components/paymentComponent";

Vue.config.productionTip = false

Vue.use(Vant);

Vue.mixin({
    data() {
        return {
            Moment: moment,
            ImagePreview
        }
    }
})


/*购买协议*/
Vue.component('agreement', agreement);
/*加载组件*/
Vue.component('List', List);
/*支付组件*/
Vue.component('paymentComponent', paymentComponent);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
