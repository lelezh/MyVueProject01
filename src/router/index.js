import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
 // mode:'history',
  routes: [
    {
      path:'/goods',
      component:(resolve)=>require(['../components/goods/goods'],resolve)
    },
    {
      path:'/ratings',

      component:(resolve)=>require(['../components/ratings/ratings'],resolve)
    },
    {
      path:'/seller',

      component:(resolve)=>require(['../components/seller/seller'],resolve)
    },
    {
      path:'*',
      redirect:'/goods'
    }
  ]
})

