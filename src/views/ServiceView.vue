<template>
	<div class="container mt-5">
		<div v-for="(service, index) in services" :key="service.id"
			:class="['row mb-5 align-items-center', { 'flex-md-row-reverse': service.reverse }]">
			<div class="col-md-6">
				<img :src="service.image" :alt="service.title" class="img-fluid rounded shadow-sm" />
			</div>
			<div class="col-md-6">
				<h2>{{ service.title }}</h2>
				<p>{{ service.description }}</p>
				<p class="mt-4 mb-2 fw-bold fs-5">主なサービス内容</p>
				<ul>
					<li v-for="(feature, i) in service.features" :key="i">{{ feature }}</li>
				</ul>
				<p class="mt-3">
					<BaseLinkButton :to="service.button.to" class="btn btn-secondary">
						{{ service.button.text }}
					</BaseLinkButton>
				</p>
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

const services = [
  {
		id: 'consulting',
    title: 'コンサルティング',
    description: '業界に特化した知見をもとに、事業成長を支える戦略立案・業務改善をご提案します。',
    features: [
      '事業計画の策定支援',
      'DX（デジタルトランスフォーメーション）推進',
      '人材・組織体制の最適化'
    ],
    image: sampleImage,
    reverse: false,
    button: {
      text: 'ご相談はこちら',
      to: '/contact'
    }
  },
  {
		id: 'development',
    title: 'システム開発',
    description: '顧客ニーズに合わせた柔軟なWeb・業務システムの開発で、業務の効率化と価値創出を実現します。',
    features: [
      '業務管理システムの開発',
      'ECサイト・予約サイト構築',
      'スマホ対応のWebアプリ'
    ],
    image: sampleImage,
    reverse: true,
    button: {
      text: '開発相談をする',
      to: '/contact'
    }
  },
  {
		id: 'support',
    title: '運用・保守',
    description: '導入後のシステムが安定稼働するよう、継続的なモニタリングやトラブル対応を実施します。',
    features: [
      'セキュリティ対策と監視',
      'サーバー・クラウド保守',
      'トラブル時の緊急対応'
    ],
    image: sampleImage,
    reverse: false,
    button: {
      text: 'サポート内容を見る',
      to: '/contact'
    }
  }
]
useHead({
  title: 'サービスページ',
  meta: [
    { name: 'description', content: 'サービスの一覧を紹介します。' },
    { property: 'og:title', content: 'サービスページ' },
    { property: 'og:description', content: 'サービスの一覧を紹介します。' }
  ]
})
</script>

