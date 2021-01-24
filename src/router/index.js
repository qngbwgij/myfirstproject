import Vue from 'vue'
import VueRouter from 'vue-router'

// 懒加载
const Home = () => import('views/home/Home')
const Activity = () => import('views/activity/activity')
const Category = () => import('views/category/Category')
const Select = () => import('views/select/Select')
const Searchresults = () => import('views/searchresults/Searchresults')


Vue.use(VueRouter)
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    // 指定的组件
    component:Home
  },
  {
    path: '/activity',
    component:Activity
  },
  {
    path: '/category',
    component:Category
  },
  {
    path: '/select',
    component:Select
  },
  {
    //path: '/searchresults/:searchba',
    path: '/searchresults',
    component: Searchresults
  }
]
const router = new VueRouter({
  routes,
  // url模式
  mode:'history'
})

export default router
