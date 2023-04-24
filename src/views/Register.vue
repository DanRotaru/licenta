<template>
  <section class="register">
    <h1>Register</h1>
    <div class="message">{{ message }}</div>
    <input type="text" id="login" placeholder="login" v-model="login"/>
    <input type="text" id="password" placeholder="password" v-model="password">

    <button @click="register()">Register</button>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import store from '@/store'
import axios from 'axios'

let count = ref(store.getters.getCount);

const login = ref(''),
  password = ref(''),
  message = ref('');

const register = () => {
  axios.post('http://localhost:3000/api/user/create/', {login: login.value, password: password.value})
    .then(response => {
      console.log(response.data);
      message.value = JSON.stringify(response.data);
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

</script>
