import type { Configuration } from 'webpack';
import slsw from 'serverless-webpack';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import path from 'path';
import nodeExternals from 'webpack-node-externals';
import ESLintPlugin from 'eslint-webpack-plugin';

const config: Configuration = {
	context: __dirname,
	mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
	entry: slsw.lib.entries,
	devtool: slsw.lib.webpack.isLocal ? 'source-map' : 'source-map',
	resolve: {
		extensions: ['.js', '.ts', '.json'],
		symlinks: false,
		cacheWithContext: false,
		plugins: [
			new TsconfigPathsPlugin({
				configFile: './tsconfig.paths.json',
			}),
		],
	},
	output: {
		libraryTarget: 'commonjs',
		path: path.join(__dirname, '.webpack'),
		filename: '[name].js',
	},
	target: 'node',
	node: {
		__dirname: true,
	},
	externalsPresets: {
		node: true,
	},
	externals: [nodeExternals()] as Configuration['externals'],
	plugins: [
		new ESLintPlugin({
			threads: true,
		}),
	],
	module: {
		rules: [
			{
				test: /\.(tsx?)$/,
				loader: 'ts-loader',
				exclude: [
					[
						path.resolve(__dirname, 'node_modules'),
						path.resolve(__dirname, '.serverless'),
						path.resolve(__dirname, '.webpack'),
					],
				],
				options: {
					experimentalWatchApi: true,
				},
			},
		],
	},
	stats: 'minimal',
};

module.exports = config;
