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

          <a class="nav-menu__item" style="margin-top: 20px;" @click="logout">
            <svg class="icon">
              <use xlink:href="#sprite-logout"></use>
            </svg>

            Logout
          </a>

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

          <div class="nav-about">© Codeazone · 2023</div>
        </div>
      </div>

    </nav>
  </aside>
</template>

<script setup>
import store from "@/store";

const menu = [
  {link: '/dashboard', icon: 'dashboard', text: 'Dashboard'},
  {link: '/dashboard/projects', icon: 'projects', text: 'Projects'},
  {link: '/dashboard/users', icon: 'users', text: 'Users'},
  {link: '/dashboard/favorites', icon: 'heart', text: 'Favorites'},
  {link: '/dashboard/analytics', icon: 'analytics', text: 'Analytics'},
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