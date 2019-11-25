
import VueRouter from 'vue-router'
import Authorization from './components/Authorization'
import Registration from "./components/Registration";
export default new VueRouter({
  routes: [
    {
      path: '/login',
      name: Authorization,
      component: Authorization
    },
    {
      path: '/registration',
      name: Registration,
      component: Registration
    }
  ],
  mode: 'history'
})


