module.exports = {
	entry: './src/index.jsx',
	output: {
		path: __dirname + '/dist',
		publicPath: '/',
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: './',
		historyApiFallback: true,
		writeToDisk: true,
	},
	devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			},
			{
				test: /\.s[ac]ss$/i,
				exclude: /node_modules/,
				include: /\.module.(s(a|c)ss)$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							modules: {
								localIdentName: "[name]__[local]__[hash:base64:5]",
							},
							sourceMap: true
						}
					},
					'sass-loader',
				]
			},
			{
				test: /\.s[ac]ss$/i,
				exclude: /\.module.(s(a|c)ss)$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
				'file-loader',
				],
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: [
					'file-loader',
				],
			},
		]
	}
};
