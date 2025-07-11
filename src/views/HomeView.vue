<template>
		<section class="text-center py-5 bg-info text-dark">
			<div class="container">
				<h2 class="display-5 fw-bold mb-3">信頼と実績のビジネスパートナー</h2>
				<p class="lead mb-5">私たちは、お客様の課題を共に解決する企業です。</p>
				<BaseLinkButton to="/contact" class="btn btn-primary">お問い合わせ</BaseLinkButton>
			</div>
		</section>

		<section class="py-5 bg-white text-center">
			<div class="container">
				<h2 class="mb-3">私たちについて</h2>
				<p>Sample Corp.は、業界における豊富な実績とノウハウを活かし、最適なソリューションを提供しています。</p>
			</div>
		</section>

		<section class="py-5 bg-light text-center">
			<div class="container">
				<h2 class="mb-4">サービス</h2>
				<div class="row g-4">
					<div class="col-md-4">
						<div class="bg-white border rounded p-3 h-100">
							<h3>コンサルティング</h3>
							<p>業界専門の知識を活かした戦略立案を支援します。</p>
						</div>
					</div>
					<div class="col-md-4">
						<div class="bg-white border rounded p-3 h-100">
							<h3>システム開発</h3>
							<p>高品質なWebアプリ・業務システムの構築を行います。</p>
						</div>
					</div>
					<div class="col-md-4">
						<div class="bg-white border rounded p-3 h-100">
							<h3>運用サポート</h3>
							<p>システム導入後の運用支援も安心してお任せください。</p>
						</div>
					</div>
				</div>
				<p class="mt-5"><BaseLinkButton to="/service" class="btn btn-secondary">サービス一覧を見る</BaseLinkButton></p>
			</div>
		</section>

	<section class="py-5 bg-white">
		<div class="container">
			<h2 class="text-center mb-4">お知らせ</h2>
			<div class="row row-cols-1 row-cols-md-3 g-4">
				<div class="col">
					<div class="card h-100 shadow-sm">
						<img :src="sampleImage" class="card-img-top" alt="サムネイル1">
						<div class="card-body">
							<h5 class="card-title">夏季休業のお知らせ</h5>
							<p class="card-text">夏季休業期間についてご案内いたします。ご不便をおかけしますが、何卒ご理解のほど...</p>
							<p class="card-button text-center mt-3"><BaseLinkButton to="/news-detail" class="btn btn-info">詳細を見る</BaseLinkButton></p>
						</div>
					</div>
				</div>
				<div class="col">
					<div class="card h-100 shadow-sm">
						<img :src="sampleImage" class="card-img-top" alt="サムネイル2">
						<div class="card-body">
							<h5 class="card-title">新サービスの提供開始</h5>
							<p class="card-text">業務効率化パッケージの提供を開始しました。詳しい機能や導入効果について...</p>
							<p class="card-button text-center mt-3"><BaseLinkButton to="/news-detail" class="btn btn-info">詳細を見る</BaseLinkButton></p>
						</div>
					</div>
				</div>
				<div class="col">
					<div class="card h-100 shadow-sm">
						<img :src="sampleImage" class="card-img-top" alt="サムネイル3">
						<div class="card-body">
							<h5 class="card-title">ホームページリニューアル</h5>
							<p class="card-text">当社ホームページを全面リニューアルいたしました。より見やすく、情報を探しやすく...</p>
							<p class="card-button text-center mt-3"><BaseLinkButton to="/news-detail" class="btn btn-info">詳細を見る</BaseLinkButton></p>
						</div>
					</div>
				</div>
			</div>
			
			<p class="mt-5 text-center"><BaseLinkButton to="/news" class="btn btn-secondary">記事一覧はこちら</BaseLinkButton></p>
		</div>
	</section>

	<CtaSection />
</template>

<script setup>
import sampleImage from '@/assets/sample.jpg'
import CtaSection from '@/components/sections/CtaSection.vue'
import BaseLinkButton from '@/components/base/BaseLinkButton.vue'
</script>