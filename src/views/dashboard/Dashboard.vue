<template>
  <div class="dashboard" v-if="store.getters.isAuthenticated">
    <Navigation/>

    <main>
      <Header/>

      <div class="wrapper">
        asdasddxs
      </div>

    </main>
  </div>
</template>

<script setup>
import Navigation from "@/components/dashboard/Navigation.vue";
import Header from "@/components/dashboard/Header.vue";
import {watch} from "vue";
import store from "@/store";

</script>
