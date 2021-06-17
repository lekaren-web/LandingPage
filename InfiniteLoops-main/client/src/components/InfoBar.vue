<template>
	<div class='info-bar'>
		{{ info }}
	</div>
</template>

<script>
	export default {
		props: [ 'info' ],
		name: 'InfoBar'
	}
</script>

<style scoped>
	.info-bar {
		position: fixed;
		top: 0;
		width: 100%;
		height: 50px;
		background-color: blue;
		color: white;
		font-size: 2em;
		font-weight: bolder;
		border: 2px solid black;
	}
</style>
