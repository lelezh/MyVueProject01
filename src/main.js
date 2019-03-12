// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import store from './vuex/vue';
import App from './App';
import router from './router';

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  // created(){
  //   console.log(this.$store.state.data);
  //   console.log(this.$store.state.data.seller);
  //   console.log(this.$store.state.data.seller.name);
  // }
})
