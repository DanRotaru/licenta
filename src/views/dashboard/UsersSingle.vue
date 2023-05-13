<template>
  <div class="dashboard">
    <Navigation/>

    <main>
      <Header :pages="[['Users', '/dashboard/users'], [userInfo.first_name + ' ' + userInfo.last_name]]"/>

      <User/>
    </main>
  </div>
</template>

<script setup>
import Navigation from "@/components/dashboard/Navigation.vue";
import Header from "@/components/dashboard/Header.vue";
import User from "@/components/users/User.vue";
</script>
