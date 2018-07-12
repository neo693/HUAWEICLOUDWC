import Vue from 'vue';
import Vuex from 'vuex';
import common from './modules/common'
Vue.use(Vuex);



let store = new Vuex.Store({
   //strict: process.env.NODE_ENV !== 'production',
  modules: {
    common
  },
});

export default store;
