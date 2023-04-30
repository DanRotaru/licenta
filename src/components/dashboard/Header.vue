<template>
  <header>
    <div class="header-wrapper">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb m-0">
          <li class="breadcrumb-item">
            <router-link to="/dashboard">
              <svg class="icon"><use xlink:href="#sprite-dashboard"></use></svg>
              Dashboard
            </router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page" v-if="page">{{ page }}</li>
        </ol>
      </nav>
    </div>
  </header>
</template>

<script setup>
const props = defineProps(['page']);

</script>