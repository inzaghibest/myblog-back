import VueRouter from 'vue-router'
import Vue from 'vue'
import MyLogin from 'views/mylogin/MyLogin'
import TextEdit from 'views/textedit/TextEdit'
import HomeContent from 'views/homecontent/HomeContent'
Vue.use(VueRouter)

  const routes = [
  {
    path: '',
    redirect: '/login'
  },
  {
    path: '/login',
    component: MyLogin
  },
  {
    path: '/home',
    component: HomeContent
  },
  {
    path: '/edit',
    component: TextEdit
  }
]

const router = new VueRouter({
  routes
})

export default router

