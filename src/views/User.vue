<template>
  <Header/>

  <div class="container">
    <User/>
  </div>

  <Footer/>
</template>

<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import User from "@/components/users/User.vue";
</script>