import { createStore } from 'vuex';
import axios from "axios";

const store = createStore({
  state: {
    // Your state properties
    count: 0,
    isAuthenticated: false,
    userInfo: null,
  },
  getters: {
    isAuthenticated(state) {
      return state.isAuthenticated;
    },
    userInfo(state) {
      return state.userInfo
    }
  },
  mutations: {
    increase(state) {
      state.count++;
    },
    authenticate(state, value) {
      state.isAuthenticated = value
    },
    logout(state) {
      document.cookie = 'Codeazone=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
      document.cookie = 'Codeazone.sig=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
      state.isAuthenticated = false;
      state.userInfo = null;
    },
    setUserInfo(state, data) {
      state.userInfo = data;
    }
    // Your mutations
  },
  actions: {
    log(state) {
      state.count = 10;
    },
    // Your actions
  },
});

export default store;
