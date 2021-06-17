export var productGetter = {
	fetchProducts: () => {
		return fetch("http://localhost:9090/products", {
			mode: 'cors'
		})
		.then(results => results.json())
		.then(data => {
			const prod_template = {
				title: '',
				description: '',
				price: 0
			}

			const products = {}

			data.forEach(entry => {
				let p = { ...prod_template }
				p.title = entry.title
				p.description = entry.description
				p.price = entry.price / 100 /* returned in cents */
				p.img_url = entry.img_url

				products[entry.id] = p
			})

			console.log('productGetter')
			console.log(products)

			return products
		})
	}
}
