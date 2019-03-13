import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path:'/goods',
      name:'goods',
      base:'goods',
      component:(resolve)=>require(['../components/goods/goods'],resolve)
    },
    {
      path:'/ratings',
      name:'ratings',
      base:'ratings',
      component:(resolve)=>require(['../components/ratings/ratings'],resolve)
    },
    {
      path:'/seller',
      name:'seller',
      base:'seller',
      component:(resolve)=>require(['../components/seller/seller'],resolve)
    },
    {
      path:'*',
      name:'goods',
      base:'goods',
      redirect:'/goods'
    }
  ]
})

