import { createStore } from 'vuex';
import axios from "axios";
import router from "@/router";

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
    authenticate(state, value) {
      state.isAuthenticated = value
    },
    logout(state) {
      document.cookie = 'Codeazone=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
      document.cookie = 'Codeazone.sig=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
      state.isAuthenticated = false;
      state.userInfo = null;
      localStorage.removeItem('userInfo');
      router.push('/');
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo;
      localStorage.setItem('userInfo', JSON.stringify(userInfo));
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
            state.setUserInfo(response.data.info);
            return true;
          }
        })
        .catch(error => {
          state.isAuthenticated = false;
          // router.push('/');

          return false;
        });
    },
    auth(state, userInfo) {
      state.isAuthenticated = true;
      state.setUserInfo(userInfo);
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
