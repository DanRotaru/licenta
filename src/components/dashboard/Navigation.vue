<template>
  <aside class="aside">
    <nav class="nav">
      <div class="nav-head">
        <router-link to="/">
          <img class="nav-head__logo" src="/img/logo.svg" alt="logo">
        </router-link>

        <div class="nav-head__close">
          <svg class="icon">
            <use xlink:href="#sprite-close-aside"></use>
          </svg>

        </div>
      </div>

      <div class="nav-menu">
        <router-link
            v-for="item in menu"
            :to="item.link"
            class="nav-menu__item">
          <svg class="icon">
            <use :xlink:href="'#sprite-' + item.icon"></use>
          </svg>

          {{ item.text }}
        </router-link>

        <div class="mt-auto">
          <router-link
              v-for="item in menuBottom"
              :to="item.link"
              class="nav-menu__item">
            <svg class="icon">
              <use :xlink:href="'#sprite-' + item.icon"></use>
            </svg>

            {{ item.text }}
          </router-link>

          <div class="btn-tab-group btn-tab-group_sm">
            <button class="btn-tab-group__btn active">
              <svg>
                <use xlink:href="#sprite-theme-light"></use>
              </svg>
              Light
            </button>
            <button class="btn-tab-group__btn">
              <svg>
                <use xlink:href="#sprite-theme-dark"></use>
              </svg>
              Dark
            </button>
          </div>

          <div class="dropdown">
            <div class="user" type="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="0,20">
              <div class="d-flex align-items-center">
                <!-- Avatar -->
                <div class="avatar me-3">
                  <img class="avatar-img rounded-circle shadow" src="/img/me.webp" alt="avatar">
                </div>
                <div>
                  <a class="h6">Dan Rotaru</a>
                  <p class="user__email">dan.rotaru2000@gmail.com</p>

                  <svg>
                    <use xlink:href="#sprite-chevron-up"></use>
                  </svg>
                </div>
              </div>
            </div>

            <ul class="dropdown-menu">
              <!-- Links -->
              <li><a class="dropdown-item" href="#"><i class="bi bi-person fa-fw me-2"></i>Edit Profile</a></li>
              <li><a class="dropdown-item" href="#"><i class="bi bi-gear fa-fw me-2"></i>Account Settings</a></li>
              <li><a class="dropdown-item" href="#"><i class="bi bi-info-circle fa-fw me-2"></i>Help</a></li>
              <li><a class="dropdown-item bg-danger-soft-hover" @click="logout()"><i class="bi bi-power fa-fw me-2"></i>Sign Out</a></li>
            </ul>
          </div>
        </div>
      </div>

    </nav>
  </aside>
</template>

<script setup>
import store from '@/store'
import {watch} from "vue";

const menu = [
  {link: '/dashboard', icon: 'dashboard', text: 'Dashboard'},
  {link: '/dashboard/projects', icon: 'projects', text: 'Projects'},
  {link: '/dashboard/users', icon: 'users', text: 'Users'},
  {link: '/dashboard/favorites', icon: 'heart', text: 'Favorites'},
  {link: '/dashboard/analytics', icon: 'analytics', text: 'Analytics'},
  {link: '/dashboard/archive', icon: 'folder', text: 'Archive'},
  {link: '/dashboard/chat', icon: 'chat', text: 'Chat'},
  {link: '/dashboard/settings', icon: 'settings', text: 'Settings'},
];

const menuBottom = [
  {link: '/dashboard/help', icon: 'help', text: 'Help'},
  {link: '/dashboard/support', icon: 'inbox', text: 'Support'}
];

const logout = () => {
  store.commit('logout')
}
</script>