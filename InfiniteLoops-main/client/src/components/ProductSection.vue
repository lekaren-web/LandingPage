<template>

<div class="centered-content">
	<h1>Available Loops</h1>
	<div class="flex-container">
		<ProductCard v-for="(product, id) in products" 
		v-bind:title="product.title" 
		v-bind:description="product.description" 
		v-bind:price="product.price" 
		v-bind:imgSrc="product.img_url" 
		v-bind:id="id" v-bind:key="id" />
	</div>
</div>

</template>

<script>
	import { mapActions } from 'vuex'
	import ProductCard from './ProductCard.vue'
	import { productGetter } from '../ProductGetter-PRODUCT_ENV.js'

	export default {
		computed: {
			loadingProduct () {
				return this.$store.state.loadingProduct
			},
			products () {
				return this.$store.state.products
			},
		},
		components: {
			ProductCard
		},
		mounted: function () {
			this.fetchProducts(productGetter)
		},
		methods: {
			...mapActions([
				'fetchProducts'
			]),
		}
	}

</script>

<style scoped>
	.flex-container {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
	}
	.centered-content {
		width: 60%;
		margin-left: auto;
		margin-right: auto;
	}
</style>
