module.exports = {
	css: {
		loaderOptions: {
			sass: {
				prependData: '@import "~@/styles/variables.scss";',
			},
		},
	},
	configureWebpack: {
		module: {
			rules: [
				{
					test: /\.(pdf)(\?.*)?$/,
					use: [
						{
							loader: 'url-loader',
							options: {
								name: 'files/[name].[hash:8].[ext]'
							}
						}
					]
				}
			]
		}
	}
};
