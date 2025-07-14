<template>
  <ContactLayout title="お問い合わせ内容の確認">
    <div class="mb-3">
      <label class="form-label">お名前</label>
      <p class="form-control-plaintext">{{ form.name }}</p>
    </div>

    <div class="mb-3">
      <label class="form-label">メールアドレス</label>
      <p class="form-control-plaintext">{{ form.email }}</p>
    </div>

    <div class="mb-4">
      <label class="form-label">お問い合わせ内容</label>
      <p class="form-control-plaintext">{{ form.message }}</p>
    </div>

    <div class="d-flex justify-content-between">
      <BaseButton type="button" @click="goBack" class="btn btn-outline-secondary">戻る</BaseButton>
      <BaseButton type="button" @click="submit" class="btn btn-primary">送信</BaseButton>
    </div>
  </ContactLayout>
</template>

<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import ContactLayout from '@/components/layout/ContactLayout.vue'
import BaseButton from '@/components/base/BaseButton.vue'

const form = reactive({
  name: 'テストユーザー',
  email: 'test@example.com',
  message: 'お問い合わせ内容の確認です。'
})

const router = useRouter()

const goBack = () => {
  router.push('../contact')
}

const submit = () => {
  router.push('../contact/contact-thanks')
}
</script>
