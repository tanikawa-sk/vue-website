<template>
  <ContactLayout title="送信が完了しました">
    <p class="mt-3 mb-4">
      お問い合わせありがとうございます。<br />
      担当者よりご連絡いたします。
    </p>
    <div class="d-flex justify-content-center">
      <BaseLinkButton to="/" class="btn btn-primary">トップに戻る</BaseLinkButton>
    </div>
  </ContactLayout>
</template>

<script setup>
import ContactLayout from '@/components/layout/ContactLayout.vue'
import BaseLinkButton from '@/components/base/BaseLinkButton.vue'

</script>
