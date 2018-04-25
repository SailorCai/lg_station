import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Main from '@/components/main/main.vue'
import mySelf from '@/components/mySelf/mySelf.vue'
import Editor from '@/components/editor/editor.vue'
import Search from '@/components/search/search.vue'

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
        {
          path: '/about',
          component: mySelf,
          hidden: false
        },
        {
          path: '/editor',
          name: 'admin',
          component: Editor
        },
        {
          path: '/category',
          component: Search
        }    
      ]
    },
  ]
})
