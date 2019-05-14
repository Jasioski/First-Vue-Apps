import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    count: 0,
	test: 1
}

const getters = {
   fetchCount: state => state.count
}

const mutations = {
    increment: state => state.count++,
    decrement: state => state.count--,
	
}

const actions = {
    increment: ({ commit }) => commit('increment'),
    decrement: ({ commit }) => commit('decrement'),
	save() {alert("test")},
	
}

export const store = new Vuex.Store({
    state,
    getters,
	mutations,
    actions
})
