<template>
  <RouterLink :to="to" class="base-button">
    <slot />
  </RouterLink>
</template>

<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  to: {
    type: [String, Object],
    required: true
  }
})
</script>
