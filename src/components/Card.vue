<template>
  <div :class="col6 ? 'col-6' : 'col-sm-6'">
    <div class="card shadow h-100 card-project">
      <!-- Image -->
      <router-link :to="'/' + projectUrl">
        <img :src="image || 'https://placehold.co/800x500/EEE/999'" class="card-img-top" alt="project image">
      </router-link>
      <!-- Card body -->
      <div class="card-body pb-0">
        <!-- Badge and favorite -->
        <div class="d-flex justify-content-between mb-2">
          <div class="d-flex gap-1">
            <a href="#" class="badge bg-purple bg-opacity-10 text-purple">All level</a>
          </div>
          <a href="#" class="h6 fw-light mb-0">
            <i class="far fa-heart"></i>
          </a>
        </div>
        <!-- Title -->
        <h5 class="card-title">
          <router-link :to="'/' + projectUrl">{{ title }}</router-link>
        </h5>
        <p class="mb-2 text-truncate-3" v-html="description"></p>
      </div>

      <div class="card-footer py-3">
        <router-link :to="'/' + profileUrl" class="user-avatar">
          <img :src="authorImage || 'https://placehold.co/128x128/EEE/999'" alt="avatar">
          <div>
            <span>{{ author }}</span>
            <Rating :stars="4.5"/>
          </div>
          <div class="user-avatar__price">
            {{ price || 0 }}$
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";
import Rating from "@/components/Rating.vue";

const props = defineProps(['col6', 'title', 'description', 'image', 'price', 'author', 'authorImage', 'projectUrl', 'profileUrl', 'cardType']);

const cardTypeClass = ref('');

if (props.cardType === '2') {
  cardTypeClass.value = 'cardTypeClass'
} else {
  cardTypeClass.value = 'col-xl-4';
}

</script>