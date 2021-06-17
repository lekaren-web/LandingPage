<template>
	<div class="contents">
		<span class="header-padding" />
		<Header />
		<CompleteOrder v-if="showCompleteOrder" />
		<ShoppingCartPreview v-if="showCart" />
		<ErrorBar v-if="hasError" v-bind:error="error" />
		<InfoBar v-if="hasInfo" v-bind:info="info" />
		<TextImage
			imageSrc="loops.gif"
			caption="Distributed Rainbow Loops"
			copy="Why stop, when you can always be running"
			title="Discover Unlimited Gains with Infinite Loops"
			/>
		<ProductSection />
		<Footer />
	</div>
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'
import TextImage from './TextImage.vue'
import ProductSection from './ProductSection.vue'
import ErrorBar from './ErrorBar.vue'
import InfoBar from './InfoBar.vue'
import ShoppingCartPreview from './ShoppingCartPreview.vue'
import CompleteOrder from './CompleteOrder.vue'

export default {
	name: 'SampleApp',
	computed: {
		info () {
			return this.$store.state.info
		},
		hasInfo () {
			return this.$store.state.hasInfo
		},
		error () {
			return this.$store.state.error
		},
		hasError () {
			return this.$store.state.hasError
		},
		showCart () {
			return this.$store.state.showCart
		},
		showCompleteOrder () {
			return this.$store.state.showCompleteOrder
		}
	},
	data: function() {
		return {
			myMessage: "Hello message"
		}
	},
	components: {
		ErrorBar,
		InfoBar,
		ProductSection,
		TextImage,
		Header,
		Footer,
		ShoppingCartPreview,
		CompleteOrder
	}
}
</script>

<style scoped>
.header-padding {
	width: 100%;
	padding: 50px;
}
.contents {
	background-color: #fff;
	display: flex;
	flex-direction: column;
}

.dashboard {
	font-family: sans;
	font-weight: lighter;
}

.dashboard h1 {
	font-weight: bold;
	color: #00a9df;
}

</style>
