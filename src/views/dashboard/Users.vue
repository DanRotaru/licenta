<template>
  <div class="dashboard">
    <Navigation/>

    <main>
      <Header :pages="[['Users', '/users']]"/>

      <div class="wrapper">
        <section class="dashboard-hero">
          <h1>Users</h1>
          <h5>Browse the best of the best</h5>
        </section>

        <Users/>
      </div>

    </main>
  </div>
</template>

<script setup>
import Navigation from "@/components/dashboard/Navigation.vue";
import Header from "@/components/dashboard/Header.vue";
import Users from "@/components/users/Users.vue";
</script>
