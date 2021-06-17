export var orderCreator = {
	createOrder: (orderDetails) => {
		return fetch("http://localhost:1234/api/v1/orders", {
			method: 'POST',
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			},
			body: JSON.stringify({ order: { 
				first_name: orderDetails.first_name,
				last_name: orderDetails.last_name,
				email: orderDetails.email_address,
				products: orderDetails.products
			}
			})
		}).then(results => results.json())
		.then(data => {
			return data.order
		})
	}
}
