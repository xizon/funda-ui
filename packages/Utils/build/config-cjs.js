const path = require('path');
const fs = require('fs');

function getEntries(dir) {
    let entries = {};
    const files = fs.readdirSync(dir);

    files.forEach((file) => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            Object.assign(entries, getEntries(fullPath));
        } else if (stat.isFile() && (path.extname(fullPath) === '.ts' || path.extname(fullPath) === '.tsx')) {
            const name = path.relative(__dirname, fullPath).replace(/\.ts$/, '').replace(/\.tsx$/, '').replace(/\.\.\/src\/hooks\//, '').replace(/\.\.\/src\/plugins\//, '').replace(/\.\.\/src\/libs\//, '');
            entries[name] = fullPath;
        }
    });

    return entries;
}

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

    entry: getEntries(path.resolve(__dirname, '../src')),
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

