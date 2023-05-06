import { createStore } from 'vuex';
import axios from "axios";
import router from "@/router";

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
      router.push('/');
    },
    setUserInfo(state, data) {
      state.userInfo = data;
    },

    login(state) {
      const existCookies = document.cookie.indexOf("Codeazone=") > -1;

      if (!existCookies) {
        store.commit('authenticate', false);
        return;
      }

      const api = axios.create({
        baseURL: "http://localhost:3000/api",
        withCredentials: true
      });

      api.get('/user/check/')
        .then(response => {
          if (response.data.success === 1) {
            state.isAuthenticated = true;
            state.userInfo = response.data.info;
            return true;
          }
        })
        .catch(error => {
          state.isAuthenticated = true;
          // router.push('/');

          return false;
        });
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
