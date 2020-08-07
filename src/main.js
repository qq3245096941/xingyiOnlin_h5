import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';

import agreement from "@/components/agreement";

Vue.config.productionTip = false

Vue.use(Vant);

/*购买协议*/
Vue.component('agreement',agreement);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
