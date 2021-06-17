var webpack = require('webpack')

module.exports = {
	configureWebpack: () => {
		let plugins = [
			new webpack.NormalModuleReplacementPlugin(/(.*)-PRODUCT_ENV(\.*)/, function(resource) {
				resource.request = resource.request.replace(/-PRODUCT_ENV/, `-${process.env.VUE_APP_PRODUCT_ENV}`);
			})
		];

		return {
			plugins,
		}
	}
};
