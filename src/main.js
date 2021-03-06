import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'
import '@/assets/styles/reset.css'
import '@/assets/styles/border.css'
import '@/assets/styles/iconfont.css'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper, /* { default global options } */)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
