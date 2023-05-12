import { createStore } from 'vuex';
import axios from "axios";
import router from "@/router";
import * as data from "@/store/data";

const store = createStore({
  state: {
    // Your state properties
    count: 0,
    isAuthenticated: false,
    userInfo: localStorage.getItem('userInfo') || null,
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
    setUserInfo(state, userInfo) {
      console.log(2)
      state.userInfo = userInfo;
      localStorage.setItem('userInfo', JSON.stringify(userInfo));
    },
    authenticate(state, userInfo) {
      if (!userInfo) return;
      state.isAuthenticated = true;
      state.userInfo = userInfo;
      localStorage.setItem('userInfo', JSON.stringify(userInfo));
    },
    logout(state) {
      document.cookie = 'Codeazone=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
      document.cookie = 'Codeazone.sig=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
      state.isAuthenticated = false;
      state.userInfo = null;
      localStorage.removeItem('userInfo');
      router.push('/');
    },

    login(state) {
      const existCookies = document.cookie.indexOf("Codeazone=") > -1;

      if (!existCookies) {
        store.commit('authenticate', false);
        return;
      }
      const baseURL = data.BACKEND_API;

      const api = axios.create({
        baseURL: baseURL,
        withCredentials: true
      });

      api.get('/user/check/')
        .then(response => {
          if (response.data.success) {
            state.userInfo = response.data.info;
            state.isAuthenticated = true;
            localStorage.setItem('userInfo', JSON.stringify(response.data.info));
            return true;
          }
        })
        .catch(error => {
          console.log('err')
          state.isAuthenticated = false;
          document.cookie = 'Codeazone=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
          document.cookie = 'Codeazone.sig=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
          state.isAuthenticated = false;
          state.userInfo = null;
          localStorage.removeItem('userInfo');
          // router.push('/');
        });
    },
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
