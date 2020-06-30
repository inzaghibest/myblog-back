import VueRouter from 'vue-router'
import Vue from 'vue'
import MyLogin from 'views/mylogin/MyLogin'
import HomeContent from 'views/homecontent/HomeContent'
import ArticlesList from 'views/homecontent/articles/ArticlesList';
import BookList from 'views/homecontent/articles/BookList';
import CategoryList from 'views/homecontent/category/CategoryList'
import TextEdit from 'views/homecontent/textedit/TextEdit'
import TextShow from 'views/homecontent/textedit/TextShow'

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
    component: HomeContent,
    children: [
      {
        path: '/home/articleslist',
        component: ArticlesList
      },
      {
        path: '/home/booklist',
        component: BookList
      },
      {
        path: '/home/categorylist',
        component: CategoryList

      },
      {
        path: '/home/textedit',
        component: TextEdit
      },
      {
        path: '/home/textshow',
        component: TextShow
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router

