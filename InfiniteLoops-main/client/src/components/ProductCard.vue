<template>
	<div class='card-250px'>
		<div class='card-image'>
			<img :src="require(`@/assets/img/${imgSrc}`)" />
		</div>
		<div class='card-content'>
			<p>Title: {{ title }} </p>
			<p>
			{{ description }}
			</p>
			<p>price: {{ price }}</p>
			<button @click="addToCart(id)" class="action-button">Add To Cart</button>
		</div>
	</div>
</template>

<script>
	import { mapActions } from 'vuex'

	export default {
		props: [ 'imgSrc', 'description', 'price', 'id', 'title'],
		name: 'ProductCard',
		methods: {
			...mapActions([ 
				'addToCart',
			])	
		}
	}
</script>

<style scoped>
	.card-250px {
		width: 250px;
		max-height: 450px;
		margin-right: 50px;
		margin-bottom: 50px;
		border: 6px solid #DFDFDF;
		background-color: #61b8FF;
		border-radius: 5px;
	}
	.action-button {
		width: 90%;
		margin-left:12px;
		height: 60px;
		border: 4px solid #1dbb1d;
		color: #131313;
		background-color: #eaeaea;
		font-size: 2em;
		font-weight: bolder;
		font-family: sans;
		border-radius: 10px;
	}
	.card-image > img {
		max-height: 230px;
		max-width: 250px;
		width: auto;
	}
</style>
