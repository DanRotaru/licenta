import axios from "axios";
import store from '@/store'

const existCookies = document.cookie.indexOf("Codeazone=") > -1;

export default {
  auth() {
    if (!existCookies) {
      store.commit('authenticate', false);
      return;
    }

    // check first time auth API
    const api = axios.create({
      baseURL: "http://localhost:3000/api",
      withCredentials: true
    });

    api.get('/user/check/')
      .then(response => {
        if (response.data.success === 1) {
          store.commit('authenticate');
          store.commit('setUserInfo', response.data.info);
          // console.log(store.getters.userInfo)
          // console.log(store.getters.isAuthenticated)
          return true;
        }
      })
      .catch(error => {
        return false;
      });

    return true;
  }
}