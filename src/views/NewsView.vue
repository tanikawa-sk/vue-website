<template>
	<div class="container mt-5 mb-5">
		<h2 class="text-center mb-3">お知らせ一覧</h2>
		<div class="row row-cols-1 row-cols-md-3 g-4">
			<div class="col" v-for="news in newsList" :key="news.id">
				<div class="card h-100 shadow-sm">
					<img :src="news.image" class="card-img-top" :alt="`${news.title} サムネイル`">
					<div class="card-body d-flex flex-column">
						<h5 class="card-title">{{ news.title }}</h5>
						<p class="card-text">{{ news.description }}</p>
						<p class="mt-4 text-center"><BaseLinkButton :to="news.to" class="btn btn-secondary">詳細を見る</BaseLinkButton></p>
					</div>
				</div>
			</div>
		</div>
	</div>
	<CtaSection />
</template>

<script setup>
import CtaSection from '@/components/sections/CtaSection.vue'
import BaseLinkButton from '@/components/base/BaseLinkButton.vue'
import sampleImage from '@/assets/sample.jpg'
import { useHead } from '@vueuse/head'

const newsList = [
  {
    id: 1,
    title: '夏季休業のお知らせ',
    description: '夏季休業期間についてご案内いたします。ご不便をおかけしますが、何卒ご理解のほど...',
    image: sampleImage,
    to: '/news/news-detail'
  },
  {
    id: 2,
    title: '新サービスの提供開始',
    description: '業務効率化パッケージの提供を開始しました。詳しい機能や導入効果について...',
    image: sampleImage,
    to: '/news/news-detail'
  },
  {
    id: 3,
    title: 'ホームページリニューアル',
    description: '当社ホームページを全面リニューアルいたしました。より見やすく、情報を探しやすく...',
    image: sampleImage,
    to: '/news/news-detail'
  },
  {
    id: 4,
    title: '年末年始休業のお知らせ',
    description: '年末年始の営業スケジュールについてご案内いたします。期間中のお問い合わせは...',
    image: sampleImage,
    to: '/news/news-detail'
  },
  {
    id: 5,
    title: 'オンラインセミナー開催のご案内',
    description: '業界動向や事例紹介をテーマにしたオンラインセミナーを開催します。参加登録はこちらから。',
    image: sampleImage,
    to: '/news/news-detail'
  },
  {
    id: 6,
    title: 'サポート対応時間変更のお知らせ',
    description: 'サポート窓口の対応時間が変更となります。ご利用中のお客様にはご不便をおかけしますが、...',
    image: sampleImage,
    to: '/news/news-detail'
  }
]
useHead({
  title: 'ニュースページ',
  meta: [
    { name: 'description', content: 'ニュースの一覧を紹介します。' },
    { property: 'og:title', content: 'ニュースページ' },
    { property: 'og:description', content: 'ニュースの一覧を紹介します。' }
  ]
})
</script>