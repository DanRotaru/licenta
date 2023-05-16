<template>

  <div class="col-lg-10 col-xl-6">
    <!-- DEFAULT STATE -->
    <div v-if="!loading" class="card shadow h-100 card-project" :data-category="category" :data-language="language">
      <!-- Image -->
      <router-link :to="'/' + projectUrl">
        <img :src="image || 'https://placehold.co/800x500/EEE/999'" class="card-img-top" alt="project image">
      </router-link>
      <!-- Card body -->
      <div class="card-body pb-0">
        <div class="d-flex justify-content-between mb-2">
          <div class="d-flex gap-1">
            <span class="badge bg-purple bg-opacity-10 text-purple text-capitalize">{{ category }}</span>
          </div>

          <a href="#" class="h6 fw-light mb-0" v-if="store.getters.isAuthenticated">
            <i class="far fa-heart"></i>
          </a>
        </div>

        <h5 class="card-title">
          <router-link :to="'/' + projectUrl">{{ title }}</router-link>
        </h5>
        <p class="mb-2 text-truncate-3">{{description.replace(/<[^>]*>/g, '')}}</p>
      </div>

      <div class="card-footer py-3">
        <router-link :to="'/' + profileUrl" class="user-avatar">
          <img :src="authorImage || 'https://placehold.co/128x128/EEE/999'" alt="avatar">
          <div>
            <span>{{ author }}</span>
            <Rating :stars="5"/>
          </div>
          <div class="user-avatar__price">
            {{ price || 0 }}$
          </div>
        </router-link>
      </div>
    </div>

    <!-- LOADING STATE -->
    <div v-if="loading" class="card shadow text-black mb-3" style="border: 1px solid #ddd;">
      <Skeleton width="100%" height="250" radius="8px 8px 0 0"/>
      <!-- Card body -->
      <div class="card-body pb-0">
        <div class="d-flex justify-content-between mb-2">
          <Skeleton width="50" height="23"/>

          <Skeleton width="24" height="24"/>
        </div>

        <Skeleton width="150" height="27"/>
        <Skeleton width="100%" height="80" top="10"/>
      </div>

      <div class="card-footer py-3 d-flex align-items-center">
        <Skeleton width="48" height="48" radius="r"/>
        <div style="margin-left: 10px">
          <Skeleton width="100" height="20"/>
          <Skeleton width="120" height="18" top="5"/>
        </div>
        <div class="user-avatar__price">
          <Skeleton width="80" height="35"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";
import Rating from "@/components/Rating.vue";
import Skeleton from "@/components/Skeleton.vue";
import store from "@/store";

const props = defineProps([
  'loading',
  'col6',
  'title',
  'description',
  'image',
  'price',
  'author',
  'authorImage',
  'projectUrl',
  'profileUrl',
  'cardType',
  'level',
  'category',
  'language'
]);

const cardTypeClass = ref('');

if (props.cardType === '2') {
  cardTypeClass.value = 'cardTypeClass'
} else {
  cardTypeClass.value = 'col-xl-4';
}

</script>