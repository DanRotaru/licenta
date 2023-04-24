<template>
  <header class="header" :class="{ header_fixed: headerFixed }">
    <div class="container">
      <nav class="navbar">
        <router-link to="/">
          <div class="navbar-brand">
            <img src="../assets/img/logo.svg" alt="logo">
          </div>
        </router-link>

        <div class="navbar-nav">
          <router-link to="/" class="navbar-nav__link">Home</router-link>
          <router-link to="/browse" class="navbar-nav__link">Browse</router-link>
          <router-link to="/pricing" class="navbar-nav__link">Pricing</router-link>
          <router-link to="/faq" class="navbar-nav__link">FAQ</router-link>
        </div>

        <div class="navbar-nav navbar-nav_last" v-if="!isAuthenticated">
          <a @click="modalContent = 'login'" class="navbar-nav__link" data-bs-toggle="modal"
             data-bs-target="#authenticationModal">Log in</a>
          <a @click="modalContent = 'register'" class="btn btn-hero" data-bs-toggle="modal"
             data-bs-target="#authenticationModal">Start for free</a>
        </div>

        <div class="d-flex align-items-center gap-3 ms-1 ms-lg-0" v-if="isAuthenticated && userInfo.avatar">

          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor">
              <path fill-rule="evenodd" d="M4.56 5.176C4.806 2.703 6.924 1 9.366 1h1.268c2.442 0 4.56 1.703 4.806 4.176v.004l.423 4.496v.002c.14 1.393.741 2.799 1.69 3.808.52.551.524 1.315.323 1.862-.202.548-.72 1.152-1.535 1.152h-3.383a3 3 0 0 1-5.917 0H3.66c-.815 0-1.333-.604-1.535-1.152-.201-.547-.197-1.31.322-1.862.95-1.009 1.551-2.415 1.69-3.808l.424-4.502ZM16.34 15h.007c.002-.002.01-.005.023-.016a.481.481 0 0 0 .127-.375c-.008-.06-.026-.085-.035-.095-1.197-1.27-1.923-2.995-2.091-4.69V9.82l-.424-4.496v-.002C13.784 3.698 12.389 2.5 10.634 2.5H9.365c-1.755 0-3.15 1.198-3.313 2.822v.002l-.424 4.5c-.168 1.695-.895 3.42-2.09 4.69-.01.01-.028.036-.036.095a.482.482 0 0 0 .127.375.086.086 0 0 0 .023.015l.006.001H16.34Zm-7.755 1.5a1.5 1.5 0 0 0 2.83 0h-2.83Z" clip-rule="evenodd"/>
            </svg>
          </div>

          <div class="dropdown">
            <a class="avatar avatar-sm p-0" href="#" id="profileDropdown" role="button" data-bs-auto-close="outside" data-bs-display="static" data-bs-toggle="dropdown" aria-expanded="false">
              <img class="avatar-img rounded-circle" :src="userInfo.avatar" alt="avatar">
            </a>
            <ul class="dropdown-menu dropdown-animation dropdown-menu-end shadow pt-3" aria-labelledby="profileDropdown">
              <!-- Profile info -->
              <li class="px-3 mb-3">
                <div class="d-flex align-items-center">
                  <!-- Avatar -->
                  <div class="avatar me-3">
                    <img class="avatar-img rounded-circle shadow" :src="userInfo.avatar" alt="avatar">
                  </div>
                  <div>
                    <a class="h6">{{ userInfo.name }}</a>
                    <p class="small m-0">{{ userInfo.email }}</p>
                  </div>
                </div>
              </li>
              <li> <hr class="dropdown-divider"></li>
              <!-- Links -->
              <li><a class="dropdown-item" href="#"><i class="bi bi-person fa-fw me-2"></i>Edit Profile</a></li>
              <li><a class="dropdown-item" href="#"><i class="bi bi-gear fa-fw me-2"></i>Account Settings</a></li>
              <li><a class="dropdown-item" href="#"><i class="bi bi-info-circle fa-fw me-2"></i>Help</a></li>
              <li><a class="dropdown-item bg-danger-soft-hover" @click="logout()"><i class="bi bi-power fa-fw me-2"></i>Sign Out</a></li>
              <!--            <li> <hr class="dropdown-divider"></li>-->
              <!-- Dark mode options START -->
              <li class="d-none">
                <div class="bg-light dark-mode-switch theme-icon-active d-flex align-items-center p-1 rounded mt-2">
                  <button type="button" class="btn btn-sm mb-0 active" data-bs-theme-value="light">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sun fa-fw mode-switch" viewBox="0 0 16 16">
                      <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"></path>
                      <use href="#"></use>
                    </svg> Light
                  </button>
                  <button type="button" class="btn btn-sm mb-0" data-bs-theme-value="dark">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon-stars fa-fw mode-switch" viewBox="0 0 16 16">
                      <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"></path>
                      <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"></path>
                      <use href="#"></use>
                    </svg> Dark
                  </button>
                  <button type="button" class="btn btn-sm mb-0" data-bs-theme-value="auto">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-circle-half fa-fw mode-switch" viewBox="0 0 16 16">
                      <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"></path>
                      <use href="#"></use>
                    </svg> Auto
                  </button>
                </div>
              </li>
              <!-- Dark mode options END-->
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>

  <Auth :content="modalContent"/>
</template>

<script setup>
import {onMounted, ref, watch} from "vue";
import store from '@/store'
import Auth from "@/components/Auth.vue";

const isAuthenticated = ref(store.getters.isAuthenticated);
const modalContent = ref('login');

const userInfo = ref({});

watch(() => store.getters.isAuthenticated, () => isAuthenticated.value = store.getters.isAuthenticated);
watch(() => store.getters.userInfo, () => userInfo.value = store.getters.userInfo);

const headerFixed = ref(false);

function logout() {
  store.commit('logout');
}

onMounted(() => {
  window.onscroll = () => {
    headerFixed.value = window.scrollY > 100;
  };
})

</script>