<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Sprites from "@/components/Sprites.vue";
</script>

<template>
  <RouterView/>

  <Sprites/>
</template>