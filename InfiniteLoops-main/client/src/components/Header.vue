<template>
	<div class="header">
		<span class="no-select title">&#9854;</span>
		<span class="no-select title">&nbsp;Infinite</span>&nbsp;<span class="no-select title lighter">Loops</span>
		<button @click="toggleCart" class="cart">&#128722;</button>
	</div>
</template>

<script>
	import { mapActions } from 'vuex'
	export default {
		name: 'Header',
		methods: {
			...mapActions([
				'toggleCart',
			])
		}
	}
</script>

<style scoped>
.header {
	background-color: #fff;
	height: 75px;
	width: 100%;
	display: flex;
	align-items: center;
	border-bottom: 1px solid #ddd;
	color: #00a9df;
	padding-left: 15px;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
}

.no-select {
	-ms-user-select: none;
	-moz-user-select: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	user-select: none;
}

.title {
	font-family: sans;
	font-size: 2em;
	font-weight: bold;
}

.lighter {
	font-weight: lighter;
}

.cart {
	font-size: 2.5em;
	margin-right: 15px;
	margin-left: auto;
	background-color: inherit;
	padding: 10px;
	border: 0;
}

.cart:hover {
	background-color: #79cae3;
	cursor: pointer;
}

.cart:focus {
	background-color: #00c1ff;
}
</style>
