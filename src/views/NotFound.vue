<template>
  <Header/>

  <div class="error-404">
    <img class="d-block mb-5 m-auto" src="../assets/img/404.svg" alt="error 404">
    <router-link to="/" class="btn btn-primary">Take me to Homepage</router-link>
  </div>

  <Footer/>
</template>
<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>