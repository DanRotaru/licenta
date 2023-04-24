<template>
  <div class="rating">
    <ul class="list-inline mb-0">
      <li v-for="starClass in starClasses" :key="starClass" class="list-inline-item me-0 small">
        <i :class="starClass"></i>
      </li>
      <li class="list-inline-item ms-2 h6 fw-medium mb-0">{{ stars }}/5.0</li>
    </ul>
  </div>
</template>

<script setup>
import {computed, toRefs} from 'vue';

const props = defineProps({
  stars: {
    type: Number
  }
});

const { stars } = toRefs(props);

const starClasses = computed(() => {
  const classes = [];
  const filledStars = Math.floor(stars.value);
  for (let i = 0; i < filledStars; i++) {
    classes.push('fas fa-star text-warning');
  }
  if (stars.value % 1 !== 0) {
    classes.push('fas fa-star-half-alt text-warning');
  }

  const remainingStars = 5 - filledStars - (stars.value % 1 !== 0 ? 1 : 0);
  for (let i = 0; i < remainingStars; i++) {
    classes.push('far fa-star text-warning');
  }
  return classes;
});
</script>
