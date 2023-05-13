<template>
  <div class="dashboard">
    <Navigation/>

    <main>
      <Header page="Projects"/>

      <div class="wrapper">
<!--        <section class="dashboard-hero">-->
<!--          <h1>Browse projects</h1>-->
<!--          <h5>Browse our diverse range of innovative projects and discover the perfect solution for your needs.</h5>-->
<!--        </section>-->

        <Projects :dashboard="true"/>
      </div>

    </main>
  </div>
</template>

<script setup>
import Navigation from "@/components/dashboard/Navigation.vue";
import Header from "@/components/dashboard/Header.vue";
import Projects from "@/components/projects/Projects.vue";
</script>
