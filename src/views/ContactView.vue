<template>
  <ContactLayout title="お問い合わせフォーム">
    <form @submit.prevent="submitForm" class="mt-4">
      <div class="mb-3">
        <label for="name" class="form-label">お名前</label>
        <input
          type="text"
          id="name"
          class="form-control"
          v-model="store.name"
          @blur="touched.name = true"
        />
        <div v-if="touched.name && store.name.trim() === ''" class="text-danger small mt-1">
          お名前を入力してください
        </div>
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">メールアドレス</label>
        <input
          type="email"
          id="email"
          class="form-control"
          v-model="store.email"
          @blur="touched.email = true"
        />
        <div v-if="touched.email && !validEmail" class="text-danger small mt-1">
          正しいメールアドレスを入力してください
        </div>
      </div>
      <div class="mb-4">
        <label for="message" class="form-label">お問い合わせ内容</label>
        <textarea
          id="message"
          class="form-control"
          rows="4"
          v-model="store.message"
          @blur="touched.message = true"
        ></textarea>
        <div v-if="touched.message && store.message.trim().length < 5" class="text-danger small mt-1">
          5文字以上入力してください
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <BaseButton type="submit" :disabled="!isFormValid" class="btn btn-primary">
          入力確認
        </BaseButton>
      </div>
    </form>
  </ContactLayout>
</template>


<script setup>
import { reactive, computed } from 'vue'
import { useRouter } from 'vue-router'
import ContactLayout from '@/components/layout/ContactLayout.vue'
import BaseButton from '@/components/base/BaseButton.vue'

import { useContactFormStore } from '@/stores/contactForm'

const router = useRouter()
const store = useContactFormStore()

const touched = reactive({
  name: false,
  email: false,
  message: false
})

const validEmail = computed(() =>
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(store.email)
)

const isFormValid = computed(() =>
  store.name.trim() !== '' &&
  validEmail.value &&
  store.message.trim().length >= 5
)

const submitForm = () => {
  if (!isFormValid.value) return
  router.push('../contact/contact-confirm')
}
</script>


