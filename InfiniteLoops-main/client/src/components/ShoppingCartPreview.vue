<template>
	<div class='right-fixed menu'>
		<div>
			<table class='cart-table'>
				<tr>
					<th>Quantity</th>
					<th>Item</th>
					<th>Price</th>
				</tr>
				<tr class='menu-item' v-for="(item, id) in cart" v-bind:key="id">
					<td>{{ item.itemCount }}</td>
					<td>{{ getProductById(id).title }}</td>
					<td>${{ getProductById(id).price }}</td>
				</tr>
				<tr class='total-row'>
					<td />
					<td>Total: </td>
					<td>${{ cartTotal.toFixed(2) }}</td>
					<td v-if="cartTotal > 0"><button @click="toggleCompleteOrder" class='green'>Check Out</button></td>
				</tr>
			</table>
		</div>
	</div>
</template>

<script>
	import { mapActions } from 'vuex'

	export default {
		name: 'ShoppingCartPreview',
		methods: {
			...mapActions([
				'toggleCompleteOrder'
			])
		},
		computed: {
			cart () {
				return this.$store.state.cart
			},
			getProductById () {
				return this.$store.getters.getProductById
			},
			cartTotal (computed) {
				if(Object.keys(computed.cart) === undefined || Object.keys(computed.cart).length === 0) return 0

				return Object.keys(computed.cart).reduce((total, id) => {
					let itemCount = computed.cart[id].itemCount || 0
					let price = computed.getProductById(id).price || 0

					return total + itemCount * price
				} , 0)
			}
		},
	}
</script>

<style scoped>
	.menu-item {
		
	}
	.right-fixed {
		position: fixed;
		right: 0;
	}
	.menu {
		max-width: 400px;
		width: 99vw;
		background-color: white;
		border: 2px solid black;
		top: 75px;
		height: 700px;
		max-height: 83vh;
	}
	.total-row {
		position: absolute;
		bottom: 0;
	}
	.cart-table td {
		width: 100px;
	}

	button .green {
		width: 120px;
		height: 50px;
		background-color: #8EFF8E;
		border-radius: 10px;
		font-weight: bolder;
	}
</style>
