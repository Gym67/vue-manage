import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import("../views/home.vue")
    },
    {
      path:'/user',
      name:'User',
      component:() => import("../views/user.vue")
    },
    // {
    //   path:'/home',
    //   name:'Home',
    //   component:() => import("../views/home.vue")
    // }
  ]
})
