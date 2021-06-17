export var orderCreator = {
	createOrder: (orderDetails) => {
		return new Promise((res) => {
			console.log('processing order for')
			console.log(orderDetails)
			res({
				id: 1000,
				order_status: 'processing',
			})
		})
	}
}
