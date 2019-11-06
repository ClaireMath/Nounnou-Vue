import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from "./router";


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loggingIn: false,
    loginError: null,
    loginSuccessful: false
  },
  mutations: {
    loginStart: state => state.loggingIn = true,
    loginStop: (state, errorMessage) => {
      state.loggingIn = false;
      state.loginError = errorMessage;
      state.loginSuccessful = !errorMessage;
    }, updateAccessToken: (state, accessToken) => {
      state.accessToken = accessToken;
    },
    logout: (state) => {
      state.accessToken = null;
    }
  },
  actions: {
    doLogin({ commit }, loginData) {
      commit('loginStart');

      axios.post('http://localhost:3000/emp/login', {
        ...loginData
      })
          .then((response) => {
            console.log(response.data)
           localStorage.setItem('accessToken', response.data["token"]);
            commit('loginStop', null);
           commit('updateAccessToken', response.data["token"]);
            router.push('/about');
          })
          .catch(error => {

            commit('loginStop', error);
            commit('updateAccessToken', null);
          })
    },fetchAccessToken({ commit }) {
      commit('updateAccessToken', localStorage.getItem('accessToken'));
    },
    logout({ commit }) {
      localStorage.removeItem('accessToken');
      commit('logout');
      router.push('/');
    }
  }
})
