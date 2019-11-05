import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import myHead from '@/components/myHead'
import mydh from '@/components/mydh'
import HelloWorld from "../components/HelloWorld";
import lunbo from '@/components/lunbo'
import news from "@/components/news";
import company from '@/components/company';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    }, {
      path: '/myHead',
      name: 'myHead',
      component: myHead,
    }, {
      path: '/mydh',
      name: 'mydh',
      component: mydh,
    }, {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld,
    }
    , {
      path: '/lunbo',
      name: 'lunbo',
      component: lunbo,
    }, {
      path: '/news',
      name: 'news',
      component: news,
    }, {
      path: '/company',
      name: 'company',
      component: company,
    }
  ]
})
