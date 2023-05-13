<template>
  <header>
    <div class="aside-close">
      <i class="bi bi-arrow-left-short"></i>
    </div>
    <div class="header-wrapper">
      <div class="w-100 d-flex justify-content-between align-items-center">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb m-0">
            <li class="breadcrumb-item" :d="typeof pages">
              <router-link to="/dashboard">
                <svg class="icon"><use xlink:href="#sprite-dashboard"></use></svg>
                Dashboard
              </router-link>
            </li>

            <li class="breadcrumb-item active" aria-current="page" v-if="page">{{ page }}</li>

            <li class="breadcrumb-item"
                :class="{ active: isLastIndex(index) }"
                v-for="(item, index) in pages"
                v-if="!page"
                :key="index">
              <router-link :to="item[1]" v-if="!isLastIndex(index)">{{ item[0] }}</router-link>
              <span v-if="isLastIndex(index)">{{ item[0] }}</span>
            </li>
          </ol>
        </nav>


        <div>
          <div class="dropdown">
            <div class="user" type="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="0,20">
              <div class="d-flex align-items-center">
                <!-- Avatar -->
                <div class="avatar me-3">
                  <img class="avatar-img rounded-circle shadow" :src="userInfo.avatar" alt=""/>
                </div>
                <div>
                  <a class="h6">
                    {{ userInfo.first_name }} {{ userInfo.last_name }}
                  </a>
                  <p class="user__email">{{ userInfo.email }}</p>

                  <svg>
                    <use xlink:href="#sprite-chevron-up"></use>
                  </svg>
                </div>
              </div>
            </div>

            <ul class="dropdown-menu">
              <li>
                <router-link to="/dashboard/settings" class="dropdown-item">
                  <i class="bi bi-person fa-fw me-2"></i> Edit Profile
                </router-link>
              </li>
              <li>
                <router-link to="/dashboard/settings" class="dropdown-item">
                  <i class="bi bi-gear fa-fw me-2"></i> Account Settings
                </router-link>
              </li>
              <li><a class="dropdown-item bg-danger-soft-hover" @click="logout()"><i class="bi bi-power fa-fw me-2"></i>Sign Out</a></li>
            </ul>
          </div>

          <router-link to="/dashboard/projects/create" type="button" class="btn btn-primary1">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"></path>
            </svg>
            Add new project
          </router-link>
        </div>
      </div>

    </div>
  </header>
</template>

<script setup>
import store from '@/store'
import {ref, watch} from "vue";

const userInfo = typeof store.getters.userInfo === 'string' ? ref(JSON.parse(store.getters.userInfo)) : ref(store.getters.userInfo);

watch(() => store.getters.userInfo, (res) => {
  if (res) {
    userInfo.value.first_name = res.first_name;
    userInfo.value.last_name = res.last_name;
    userInfo.value.email = res.email;
    userInfo.value.avatar = res.avatar;
  }
});

const props = defineProps(['pages', 'page']);

const isLastIndex = (index) => {
  return index === props.pages.length - 1;
}

const logout = () => {
  store.commit('logout')
}

</script>