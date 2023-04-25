<template>
  <div class="dashboard settings">
    <Navigation/>

    <main>
      <Header/>

      <div class="wrapper">
        <aside class="settings-aside">
          <nav class="nav">
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
            </div>
          </nav>
        </aside>


      </div>

    </main>
  </div>
</template>

<script setup>
import Navigation from "@/components/dashboard/Navigation.vue";
import Header from "@/components/dashboard/Header.vue";

const menu = [
  {link: '/dashboard', icon: 'user-profile', text: 'My details'},
  {link: '/dashboard/projects', icon: 'user-details', text: 'Profile'},
  {link: '/dashboard/favorites', icon: 'security', text: 'Security'},
  {link: '/dashboard/archive', icon: 'card', text: 'Billing'},
  {link: '/dashboard/chat', icon: 'notification', text: 'Notifications'},
  {link: '/dashboard/settings', icon: 'extensions', text: 'Integration'},
  {link: '/dashboard/zone', icon: 'alert', text: 'Danger Zone'},
];

</script>
