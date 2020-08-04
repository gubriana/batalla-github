import Vue from 'vue'
import axios from 'axios'
import Vuex from 'vuex'
import App from './App.vue'

Vue.use(Vuex)

Vue.config.productionTip = false

Vue.prototype.axios = axios;

const store = new Vuex.Store({
  state: {
    puntaje1: 0,
    puntaje2: 0
  },
  mutations: {
    cambiarPuntaje1(state, puntaje1){
      state.puntaje1 = puntaje1
    },
    cambiarPuntaje2(state, puntaje2){
      state.puntaje2 = puntaje2
    }
  }
})

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
