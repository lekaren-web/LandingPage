<template>
	<div class='error-bar'>
		{{ error }}
	</div>
</template>

<script>
	export default {
		props: [ 'error' ],
		name: 'ErrorBar'
	}
</script>

<style scoped>
	.error-bar {
		position: fixed;
		top: 0;
		width: 100%;
		height: 50px;
		background-color: red;
		color: white;
		font-size: 2em;
		font-weight: bolder;
		border: 2px solid black;
	}
</style>
