<template>
  <section class="py-5 bg-warning text-center">
    <div class="container">
      <h2 class="mb-3">まずはご相談ください</h2>
      <p class="mb-4">各種サービスに関するご質問やご相談はお気軽にどうぞ。</p>
      <p class="text-center">
				<BaseLinkButton to="/contact" class="btn btn-primary">お問い合わせ</BaseLinkButton>
      </p>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import BaseLinkButton from '@/components/base/BaseLinkButton.vue'
</script>