<template>
  <div class="card mx-auto mt-5 mb-5 p-4 shadow rounded" style="max-width: 480px ;width: calc(100% - 40px)">
		<!-- 親コンポーネントから渡された `title` を表示 -->
    <h2>{{ title }}</h2>
		<!-- 親コンポーネントが渡した内容"<ContactLayout> ~ <ContactLayout>"を挿入 -->
    <slot></slot>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'

// 親コンポーネントから受け取るプロパティを定義
defineProps({
  title: String
})
onMounted(() => {
  document.body.classList.add('contact-bg')
})
onUnmounted(() => {
  document.body.classList.remove('contact-bg')
})

</script>