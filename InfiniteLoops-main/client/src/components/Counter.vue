<template>
	<div>
		<p v-if="loading">Loading...</p>
		<p v-if="!loading">{{ count }}</p>
		<button @click="increment">Click me</button>
	</div>
</template>

<script>
	import { mapActions } from 'vuex'

	export default {
		name: 'Counter',
		computed: {
			count () {
				return this.$store.state.count
			},
			loading () {
				return this.$store.state.loading
			}
		},
		methods: {
			...mapActions([
				'increment',
			])
		}
	}
</script>
