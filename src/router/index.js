import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Love from "@/components/love_zly/love_zly"
import Miss from "@/components/miss_zly/miss_zly"
import Long from "@/components/long_love/long_love"

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        keepAlive: true
      }
    }, {
      path: '/love',
      name: 'Love',
      component: Love
    },
    {
      path: '/miss',
      name: 'Miss',
      component: Miss

    },
    {
      path: '/long',
      name: 'Long',
      component: Long
    }
  ]
})
