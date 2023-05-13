<template>
  <header class="header" :class="{ header_fixed: headerFixed }">
    <div class="container">
      <nav class="navbar">
        <router-link to="/">
          <div class="navbar-brand">
            <img src="/img/logo.svg" alt="logo">
          </div>
        </router-link>

        <div class="navbar-nav">
          <router-link to="/" class="navbar-nav__link">Home</router-link>
          <router-link to="/browse" class="navbar-nav__link">Browse</router-link>
          <router-link to="/pricing" class="navbar-nav__link">Pricing</router-link>
          <router-link to="/faq" class="navbar-nav__link">FAQ</router-link>
        </div>

        <div class="navbar-nav navbar-nav_last" v-if="!authenticated">
          <a @click="modalContent = 'login'" class="navbar-nav__link" data-bs-toggle="modal"
             data-bs-target="#authenticationModal">Log in</a>
          <a @click="modalContent = 'register'" class="btn btn-hero" data-bs-toggle="modal"
             data-bs-target="#authenticationModal">Start for free</a>
        </div>


        <router-link to="/dashboard" v-if="authenticated"
                     class="btn btn-hero">Dashboard
        </router-link>
      </nav>
    </div>
  </header>

  <Auth :content="modalContent"/>
</template>

<script setup>
import {onMounted, ref, watch} from "vue";
import store from '@/store'
import Auth from "@/components/Auth.vue";

const modalContent = ref('login');
const headerFixed = ref(false);
const authenticated = ref(store.getters.isAuthenticated);

watch(() => store.getters.isAuthenticated, (value) => authenticated.value = value);

onMounted(() => {
  window.onscroll = () => {
    headerFixed.value = window.scrollY > 100;
  };
})

</script>