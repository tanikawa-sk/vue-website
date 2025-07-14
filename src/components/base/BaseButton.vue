<template>
  <button class="base-button" :type="type" @click="$emit('click')">
    <slot />
  </button>
</template>

<script setup>
defineProps({
  type: {
    type: String,
    default: 'button'
  }
})
</script>
