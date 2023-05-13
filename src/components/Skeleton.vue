<template>
  <div class="skeleton"
       :style="{ width: isPercent(width) ? width : width + 'px',
       height: isPercent(height) ? height : height + 'px',
       borderRadius: radius === 'r' ? '50%' : (isPercent(radius) ? radius : radius + 'px'),
       marginTop: isPercent(top) ? top : top + 'px',
       marginLeft: isPercent(left) ? left : left + 'px' }"></div>
</template>
<script setup>
const props = defineProps({
  width: {
    type: [Number, String],
    default: '100%',
  },
  height: {
    type: [Number, String],
    default: '100%',
  },
  top: {
    type: [Number, String],
    default: '0',
  },
  left: {
    type: [Number, String],
    default: '0',
  },
  radius: {
    type: [Number, String],
    default: '5',
  },
});

const isPercent = (value) => {
  return typeof value === 'string' && value.indexOf('%') !== -1;
};
</script>