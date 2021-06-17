<template>
	<div class='shadow'>
		<div class='modal'>
			<button @click="toggleCompleteOrder" class='close'>X</button>
			<h1>Complete Your Order</h1>

			<h2>Contact Information</h2>
			<div class='form'>
				<h3>First Name</h3>
				<input v-model="first_name" placeholder="John">
				<h3>Last Name</h3>
				<input v-model="last_name" placeholder="Doe">
				<h3>Email Address</h3>
				<input v-model="email_address" placeholder="mail@example.com">

				<button @click='submit({first_name: first_name, last_name: last_name, email_address: email_address})'>Submit</button>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapActions } from 'vuex'
	import { orderCreator } from '../OrderCreator-PRODUCT_ENV.js'

	export default {
		name: 'CompleteOrder',
		methods: {
			submit(orderDetails) {
				this.submitOrder({orderCreator, orderDetails})
			},
			...mapActions([
				'toggleCompleteOrder',
				'submitOrder'
			])
		},
		data: function () {
			return {
				first_name: "",
				last_name: "",
				email_address: "",
			}
		}
	}
</script>

<style scoped>
	button.close {
		border: 0;
		background-color: inherit;
		float: right;
		border-radius:10px;
		font-size: 1.5em;
		font-weight: bolder;
	}

	.shadow {
		width: 100%;
		height: 100%;
		background-color: #0000008c;
		position: fixed;
	}

	.modal {
		position: fixed;
		left: 50%;
		top: 50%;
		height: 700px;
		max-height: 83vh;
		width: 99vw;
		max-width: 700px;
		border: 1px solid black;
		background-color: white;
		border-radius: 10px;
		transform: translate(-50%, -50%);
		text-align: center;
	}
</style>
