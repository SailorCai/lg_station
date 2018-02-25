import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Main from '@/components/main/main.vue'

Vue.use(Router)

export default new Router({
  routes: [
    /*{
      path: '/wellcome',
      name: 'HelloWorld',
      component: HelloWorld
    },*/
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/main',
          component: Main,
          hidden: false
        },
      ]
    },    
  ]
})
