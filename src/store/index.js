import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let defaultCity = '上海';
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}

export default new Vuex.Store({
  state: {
  	city: defaultCity
  },
  mutations: {
  	changeCity (state, city) {
  		state.city = city;
  		try {
  			localStorage.city = city;
  		} catch (e) {}
  	}
  },
  actions: {
  	// 可以绕过action直接修改mutation
  	changeCity () {

  	}
  },
  modules: {
  }
})
