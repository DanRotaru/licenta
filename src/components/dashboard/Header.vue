<template>
  <header>
    <div class="header-wrapper">
      <div class="w-100 d-flex justify-content-between">
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

        <div>
          <button type="button" class="btn btn-primary1">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"></path>
            </svg>
            Add new project
          </button>
        </div>
      </div>

    </div>
  </header>
</template>

<script setup>
const props = defineProps(['page']);

</script>