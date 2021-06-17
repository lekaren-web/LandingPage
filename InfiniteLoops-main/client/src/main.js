import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import { 
	SET_LOADING, 
	SET_LOADED, 
	SET_LOADED_PRODUCTS, 
	SET_LOADING_PRODUCTS,
	SET_ERROR,
	SET_NO_ERROR,
	TOGGLE_SHOW_CART,
	TOGGLE_SHOW_COMPLETE_ORDER,
	SET_CREATED_ORDER,
	SET_CREATING_ORDER,
	SET_INFO,
	SET_NO_INFO
} from './mutation_constants.js'

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		count: 10,
		products: {},
		cart: {},
		error: {},
		info: {},
		hasError: false,
		hasInfo: false,
		loading: false,
		loadingProducts: false,
		creatingOrder: false,
		showCart: false,
		showCompleteOrder: false
	},
	mutations: {
		[TOGGLE_SHOW_COMPLETE_ORDER]: (state => state.showCompleteOrder = !state.showCompleteOrder),
		[TOGGLE_SHOW_CART]: (state => state.showCart = !state.showCart),
		[SET_ERROR]: ((state, error) => {
			state.hasError = true
			state.error = error
		}),
		[SET_NO_ERROR]: (state => {
			state.hasError = false
			state.error = null
		}),
		[SET_INFO]: ((state, info) => {
			state.hasInfo = true
			state.info = info
		}),
		[SET_NO_INFO]: (state => {
			state.hasInfo = false
			state.info = null
		}),
		[SET_LOADING]: (state => state.loading = true),
		[SET_LOADED]: (state => state.loading = false),
		[SET_CREATING_ORDER]: (state => state.creatingOrder = true),
		[SET_CREATED_ORDER]: (state => state.creatingOrder = false),
		increment: (state => state.count++),
		[SET_LOADING_PRODUCTS]: (state => state.loadingProducts = true),
		[SET_LOADED_PRODUCTS]: (state => state.loadingProducts = false),
		setProducts: (state, products) => {
			/*
			products.forEach((item) => {
				Vue.set(state.products, item.id, item)
			})
			*/
			state.products = products
			console.log(state.products)
		},
		addProductToCart: (state, productId) => {
			console.log(`adding ${productId}`)
			if(state.cart[productId]) {
				state.cart[productId].itemCount++;
			} else {
				Vue.set(state.cart, productId, { itemCount: 1 })
			}
		}
	},
	getters: {
		getProductById: (state) => (productId) => {
			return state.products[productId]
		}
	},
	actions: {
		increment: (context) => {
			context.commit(SET_LOADING)
			setTimeout(() => {
				context.commit('increment')	
				context.commit(SET_LOADED)
			}, 1000)
		},
		fetchProducts: (context, productGetter) => {
			context.commit(SET_LOADING_PRODUCTS)
			productGetter.fetchProducts().then((results) => {
				console.log(results)
				context.commit('setProducts', results)
				context.commit(SET_LOADED_PRODUCTS)
			})
		},
		addToCart: (context, productId) => {
			console.log('in')
			if(!productId) {
				context.commit(SET_ERROR, "Unable to read product ID")
				setTimeout(() => {
					context.commit(SET_NO_ERROR)
				}, 3000)
			}

			let product = context.getters.getProductById(productId)

			if(!product) {
				context.commit(SET_ERROR, `Product ${productId} not found`)
				setTimeout(() => {
					context.commit(SET_NO_ERROR)
				}, 3000)
			}

			console.log(`addToCart ${productId}`)

			context.commit('addProductToCart', productId)	
		},
		toggleCart: (context) => {
			context.commit(TOGGLE_SHOW_CART)
		},
		toggleCompleteOrder: (context) => {
			if(context.state.showCart)
				context.commit(TOGGLE_SHOW_CART)

			context.commit(TOGGLE_SHOW_COMPLETE_ORDER)
		},
		submitOrder: (context, {orderCreator, orderDetails}) => {
			if(context.state.showCompleteOrder)
				context.commit(TOGGLE_SHOW_COMPLETE_ORDER)

			orderDetails.products = context.state.cart

			context.commit(SET_CREATING_ORDER)
			context.commit(SET_INFO, 'Your order is being created')
			setTimeout(() => {
				context.commit(SET_NO_INFO)
			}, 3000)
			orderCreator.createOrder(orderDetails).then((results) => {
				context.commit(SET_CREATED_ORDER)
				context.commit(SET_INFO, `Your order has been created - order id ${results.id}`)
				setTimeout(() => {
					context.commit(SET_NO_INFO)
				}, 3000)
			})
		}

	}
})

new Vue({
	render: h => h(App),
	store: store,
}).$mount('#app')



