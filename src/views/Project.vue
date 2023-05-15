<template>
  <Header/>

  <section class="bg-light pt-8 pb-5" data-test-hook="s">
    <div class="container">
      <div class="row py-5">
        <Project :browse="true"/>
      </div>
    </div>
  </section>

  <Footer/>
</template>

<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Project from "@/components/projects/Project.vue";
</script>