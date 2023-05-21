const path = require('path');

module.exports = {
    resolve: {
        fallback: {
            fs: false
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss', '.sass']
    },

    optimization: {
        minimize: false
    },

    //Exclude react from bundle
    externals: {
        'react': {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react',
        },
        'react-dom': {
            root: 'ReactDOM',
            commonjs2: 'react-dom',
            commonjs: 'react-dom',
            amd: 'react-dom',
        },
    },

    entry: {
        'index': './src/index.tsx'
    },

    output: {
        globalObject: 'this',
        library: "RPB",
        libraryTarget: "umd",
        filename: '[name].js',
        path: path.resolve(__dirname, '../dist/cjs')
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                loader: 'babel-loader',
                exclude: path.resolve(__dirname, '../node_modules'),
                options: {
                    'presets': [
                        '@babel/preset-env',
                        '@babel/preset-react',
                        '@babel/preset-typescript',
                        {
                            plugins: [
                                '@babel/plugin-proposal-class-properties'
                            ]
                        }
                    ]
                }
            },
			{

				test: /\.(sa|sc|c)ss$/,
				exclude: path.resolve(__dirname, '../node_modules'),
				use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
					{
						loader: "css-loader",  // interprets @import and url() and will resolve them. ( Step 2 )
						options: {
							sourceMap: true
						}
					},
					{
						loader: 'sass-loader', // compiles Sass to CSS ( Step 1 )
						options: {
                            implementation: require("sass"),
                            sourceMap: true,
                            /* (nested | expanded | compact | compressed) */
                            sassOptions: {
                                outputStyle: 'expanded',
                            },
						}

					},
				]
			}


        ],



    },
    //devtool: 'source-map',
};

