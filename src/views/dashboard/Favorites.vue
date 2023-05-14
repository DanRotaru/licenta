<template>
  <div class="dashboard">
    <Navigation/>

    <main>
      <Header page="Favorites"/>

      <div class="wrapper">
        <section class="dashboard-hero">
          <h1>Favorites projects</h1>
          <h5>Browse your favorites projects</h5>
        </section>

        <div class="none">None</div>
      </div>

    </main>
  </div>
</template>

<script setup>
import Navigation from "@/components/dashboard/Navigation.vue";
import Header from "@/components/dashboard/Header.vue";
</script>
