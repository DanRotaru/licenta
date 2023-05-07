<template>
  <div class="dashboard">
    <Navigation/>

    <main>
      <Header/>

      <div class="wrapper">
        dashboard home
      </div>

    </main>
  </div>
</template>

<script setup>
import Navigation from "@/components/dashboard/Navigation.vue";
import Header from "@/components/dashboard/Header.vue";
import {watch} from "vue";
import store from "@/store";

console.log(store.getters.userInfo);

</script>
