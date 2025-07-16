<template>
  <div class="container mt-5 mb-5">
    <h1 class="mb-3">夏季休業のお知らせ</h1>
    <p class="text-muted">2025年6月1日</p>
    
    <div class="mb-4">
      <img :src="sampleImage" alt="夏季休業のお知らせ サムネイル" class="img-fluid rounded shadow-sm">
    </div>

    <hr>
    <p>平素よりSample Corp.をご利用いただき誠にありがとうございます。</p>
    <p>誠に勝手ながら、以下の期間を夏季休業とさせていただきます。</p>
    <ul>
      <li>休業期間：2025年8月10日（日）〜8月15日（金）</li>
      <li>お問い合わせ対応：8月16日（土）より順次対応</li>
    </ul>
    <p>お客様にはご不便をおかけいたしますが、何卒ご理解のほどよろしくお願い申し上げます。</p>

    <p class="mt-4"><BaseLinkButton to="/news" class="btn btn-secondary">一覧に戻る</BaseLinkButton></p>
  </div>
	<CtaSection />
</template>

<script setup>
import CtaSection from '@/components/sections/CtaSection.vue'
import BaseLinkButton from '@/components/base/BaseLinkButton.vue'
import sampleImage from '@/assets/sample.jpg'
import { useHead } from '@vueuse/head'

useHead({
  title: 'ニュース詳細ページ',
  meta: [
    { name: 'description', content: 'ニュースの詳細を紹介します。' },
    { property: 'og:title', content: 'ニュース詳細ページ' },
    { property: 'og:description', content: 'ニュースの詳細を紹介します。' }
  ]
})
</script>
