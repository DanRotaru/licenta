<template>
  <Header/>

  <div class="user-banner"></div>
  <section class="section-user">
    <div class="container">
      <div class="row g-0 g-lg-5">
        <User/>
      </div>
    </div>
  </section>

  <Footer/>
</template>

<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import User from "@/components/users/User.vue";
</script>