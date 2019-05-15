import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

 
Vue.use(Vuex)

const state = {
    count: 0,
	status: 'Hello'
}

const getters = {
   fetchCount: state => state.count,
   fetchStat: state => state.status
}

const mutations = {
    increment: state => state.count++,
	decrement: state => state.count--,
	
}

const actions = {
    increment: ({ commit }) => commit('increment'),
    decrement: ({ commit }) => commit('decrement'),
	
	save() {		
		alert ("Will default to 0 if you leave input box empty")
		var input = "a"
		
		while (isNaN(input)) {
			input = prompt("Please enter what number you would like to set", state.count);
		}
		
		state.count = input;
	},
	
	date() {
		state.status = new Date()
	}
}

export const store = new Vuex.Store({
    state,
    getters,
	mutations,
    actions
})
