const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // traemos la dependencia que hemos instalado

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'bundle.js'
    },
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            {
                test: /\.s[ac]ss$/i, // en [ac] lo que estamos diciendo es que puede ser una letra u otra letra, y la i del final no sé que es
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({ // añadimos un nuevo plugin
            filename: '[name].css'
        }),
    ],
    devServer: { // me permite trabajar con todos los elementos que son clave para el entorno local de desarrollo
        allowedHosts: path.join(__dirname, 'dist'), // permite saber dónde está trabajando el proyecto ('dist' de distribution)
        compress: true,
        port: 3005, // y el puerto en el que vamos a trabajar
    }
}