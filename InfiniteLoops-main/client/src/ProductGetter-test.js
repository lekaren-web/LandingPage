export var productGetter = {
	fetchProducts: () => {
		return new Promise((res) => {
			res({
				1: {name: "hi", price: 10, img_url: 'loop1.gif'},
				2: {name: "dias", price: 13, img_url: 'loop2.gif'},
				3: {name: "apple", price: 12, img_url: 'loop3.gif'},
				4: {name: "pooch", price: 13.5, img_url: 'loop4.gif'},
				5: {name: "moonbeam", price: 1, img_url: 'loop5.gif'},
				6: {name: "lifetime original movie", price: 8, img_url: 'loop6.gif'},
				7: {name: "Uber", price: 12, img_url: 'loop7.gif'},
				8: {name: "Edward Cullen", price: 15, img_url: 'loop8.gif'},
				9: {name: "Neon Light Fixture", price: 19, img_url: 'loop1.gif'},
			})
		})
	}
}


