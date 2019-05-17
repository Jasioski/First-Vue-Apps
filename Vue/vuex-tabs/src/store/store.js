import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  mainTxt: 'Hello this is my first Vuex app!',
};

const getters = {
  // eslint-disable-next-line no-shadow
  fetchMain: state => state.mainTxt,
};

const mutations = {

  // eslint-disable-next-line no-return-assign
  changeMain: state => state.mainTxt = prompt('What would you like to change the text to?', state.mainTxt),
};

const actions = {
  changeMain: ({ commit }) => commit('changeMain'),
};

// eslint-disable-next-line import/prefer-default-export
export const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
});
