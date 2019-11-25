import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import './../node_modules/bulma/css/bulma.css';
import router from "./routes";

Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
