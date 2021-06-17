<template>
	<div class="inline">
		<div class="card-content">
			<h2>{{ title }}</h2>
			<p>
				{{ copy }}
			</p>
		</div>
		<div class="card-image">
			<img :src="require(`@/assets/img/${imageSrc}`)" />
			<p class="caption">
			{{ caption }}
			</p>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['caption', 'copy', 'title', 'imageSrc'],
		name: 'TextImage',
	}
</script>

<style scoped>
	.inline {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		width: 60%;
		margin-left: auto;
		margin-right: auto;
		justify-content: center;
	}

	.card-content h2 {
		vertical-align: top;
		color: #00a9df;
		font-weight: bold;
		font-size: 2em;
		width: 350px;
	}

	.card-content p {
		font-family: sans-serif;
		font-size: 1.25em;
		line-height: 1.5;
	}

	.card-content {
		width: 350px;
	}

	.card-image img {
		width: 350px;
	}

	.caption {
		width: 350px;
		text-align: right;
		color: #aaa;
		font-style: italic;
	}
</style>
