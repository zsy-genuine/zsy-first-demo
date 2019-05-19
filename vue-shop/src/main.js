import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// import '../public/font.css'
// import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
//轮播图插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)  

Vue.config.productionTip = false,
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '',
  loading: 'http://img.zcool.cn/community/0103055996ab7ca801215603fe0956.gif',
  attempt: 1
})
import VueJsonp from 'vue-jsonp'
Vue.use(VueJsonp)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
