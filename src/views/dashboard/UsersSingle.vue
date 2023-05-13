<template>
  <div class="dashboard">
    <Navigation/>

    <main>
      <Header :pages="[['Users', '/dashboard/users'], [userInfo.first_name + ' ' + userInfo.last_name]]"/>

      <User/>
    </main>
  </div>
</template>

<script setup>
import Navigation from "@/components/dashboard/Navigation.vue";
import Header from "@/components/dashboard/Header.vue";
import User from "@/components/users/User.vue";

import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import axios from "axios";
import * as data from "@/store/data";

const route = useRoute();
const id = route.params.id;

const userInfo = ref({
  first_name: '',
  last_name: '',
  email: '',
  description: '',
  position: '',
  avatar: '',
  founded: false,
  not_found: false
});

// const id = '64579688899654c8cea1b4a3';

const baseURL = data.BACKEND_API;
const api = axios.create({
  baseURL,
  withCredentials: true
});

async function getUserInfo(id) {
  const res = await api.get('/user/info/' + id);
  if (res.data.success) {
    userInfo.value.first_name = res.data.userInfo.first_name;
    userInfo.value.last_name = res.data.userInfo.last_name;
    userInfo.value.email = res.data.userInfo.email;
    userInfo.value.description = res.data.userInfo.description;
    userInfo.value.position = res.data.userInfo.position;
    userInfo.value.avatar = res.data.userInfo.avatar;
    userInfo.value.founded = true;
  } else {
    userInfo.value.not_found = true;
  }
  console.log(res);
}

getUserInfo(id);


onMounted(() => {
  const link = document.querySelector('a[href="/dashboard/users"]');
  if (link) {
    link.classList.add("router-link-active");
  }
})
</script>
