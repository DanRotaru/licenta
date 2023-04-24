<template>
  <section class="auth">
    <h1>Auth</h1>
    <div class="message">{{ message }}</div>
    <input type="text" id="login" placeholder="login" v-model="login"/>
    <input type="text" id="password" placeholder="password" v-model="password">

    <button @click="auth()">Auth</button>
    <button @click="check()">Check</button>

    <a :href="gitHubURL">Auth using github</a>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import store from '@/store'
import axios from 'axios'
import { useRouter } from 'vue-router';
const router = useRouter();

let count = ref(store.getters.getCount);

const gitHubURL = "https://github.com/login/oauth/authorize?client_id=4e23425f30ed641ff5c9";

const login = ref('a'),
  password = ref('a'),
  message = ref('');

const api = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true
});

const auth = () => {
  api.post('http://localhost:3000/api/user/auth/', {login: login.value, password: password.value})
    .then(response => {
      message.value = JSON.stringify(response.data);
      
      if (response.data?.success) {
        setTimeout(() => {
          router.push('/app');

          store.commit('authenticate');
        }, 1000);
      }

      // handle success
    })
    .catch(error => {
      console.log(error.response.data);
      // handle error
    });
}

const increase = () => {
  store.commit('increase');
  count.value = store.getters.getCount;
}

function check() {
  api.get('/user/check/')
    .then(response => {
      console.log(response);
      console.log(response.data);
      message.value = JSON.stringify(response.data);
      
      // handle success
    })
    .catch(error => {
      console.log(error.response.data);
      // handle error
    });
}

</script>
