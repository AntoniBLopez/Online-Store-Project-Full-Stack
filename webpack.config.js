// Este archivo es clave para trabajar con nuestro proyecto

const path = require("path"); // Nos permite saber dónde vamos a estar utilizando el proyecto
const HtmlWebpackPlugin = require('html-webpack-plugin'); // traemos el plugin que hemos instalado de html con webpack

module.exports = {
    entry: './src/index.js', // aquí indicamos el punto de entrada de nuestra APP
    output: { // aquí indicamos dónde va a estar viviendo el proyecto una vez esté preparado
        path: path.resolve(__dirname, "dist"), // tenemos __dirname para saber dónde me encuentro, y como segundo parámetro -->
        // pasamos la carpeta que vamos a utilizar "dist" ( de distribución )
        filename: 'bundle.js'// Le ponemos un nombre al empaquetado que se va a crear
    },
    mode: 'development', // puede ser development, production o none
    resolve: { // aquí añado las extensiones por medio de un array
        extensions: ['.js', '.jsx']
    },
    module: { // aquí añadimos las reglas que vamos a crear con nuestros loaders y los plugins
        rules: [
            {
                test: /\.(js|jsx)$/, // es un reject al que le indicamos que detecte las extensiones js y jsx para -->
                // poder trabjar con nuestro recurso
                exclude: /node_modules/, // excluimos lo que no queremos que leea
                use: { // añadimos lo que vamos a utilzar
                    loader: 'babel-loader'
                }
            },
            { // ahora vamos a crear una regla que nos va a permitir trabajar con HTML
                test: /\.html$/, // le decimos que lea todos los archivos HTML
                use: [
                    {
                        loader: 'html-loader' // le decimos que va a trabjar con html-loader
                    }
                ]
            }
        ]
    },
    plugins: [ // aquí agregamos los plugins que vamos a estar utilizando
        new HtmlWebpackPlugin({
            template: './public/index.html', // le decimos que vamos a utilizar un template y le indicamos dónde está
            filename: './index.html' // indicamos el nombre del empaquetado
        })
    ],
}

// Y ya tenemos la estructura del webpack para el pryecto de la tienda online