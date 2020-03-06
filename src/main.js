import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;
//路由
import router from "./router.js";
//vuex
import store from './store.js';
//swiper
import 'swiper/css/swiper.css';

new Vue({
    render: h => h(App),
    router,
    store,
}).$mount('#app');
