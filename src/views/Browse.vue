<template>
  <Header/>

  <section class="section-browse">
    <div class="container">
     <div class="position-relative z-index-1">
       <h1>Explore Diverse Projects from Various Industries</h1>
       <h5>Browse our diverse range of innovative projects and discover the perfect solution for your needs.</h5>
     </div>
    </div>
  </section>

  <section class="projects">
    <div class="container">
      <Projects :browse="true"/>
    </div>
  </section>

  <Footer/>
</template>

<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Projects from "@/components/projects/Projects.vue";
</script>