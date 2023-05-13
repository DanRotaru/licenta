<template>
  <div class="dashboard">
    <Navigation/>

    <main>
      <Header :pages="[['Projects', '/dashboard/projects'], [id]]"/>

      <Project/>
    </main>
  </div>
</template>

<script setup>
import Navigation from "@/components/dashboard/Navigation.vue";
import Header from "@/components/dashboard/Header.vue";
import Project from "@/components/projects/Project.vue";
</script>
