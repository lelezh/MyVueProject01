import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
const data = require('../../data.json');

export default new Vuex.Store({
  state:{
    data:data
  }
})



