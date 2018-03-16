// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource';
import iView from 'iview'
import Vuex  from 'vuex'
import 'iview/dist/styles/iview.css'
import header from './components/header/header'
import goods from './components/goods/goods'
import cart from './components/cart/cart'
import personal from './components/personal/personal'
import product from './components/header/product/product'
import details from './components/header/product/details'
import free from './components/personal/register/free'
import './common/style/index.css'
Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(iView)
Vue.use(Vuex)

var routes = [
{path: '/', redirect: '/header'}, 
{path:'/header',component:header},
{path:'/product',component:product},
{path:'/details',component:details},
{path:'/goods',component:goods},
{path:'/cart',component:cart},
{path:'/personal',component:personal},
{path:'/free',component:free}

]
var router = new VueRouter({
	linkActiveClass:'active',
   routes
})
/* eslint-disable no-new */
var hub = new Vue({
  el: '#app',
	  router,
  template: '<App/>',
  components: { App },
  render: h => h(App)
  
})

