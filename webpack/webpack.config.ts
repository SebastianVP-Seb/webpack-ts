import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const ROOT_DIR=path.resolve(__dirname);

//recomendable utilizar una función para webpack
const InitConfigWebpack=(env: any, arg: any): webpack.Configuration=>{

    return {
        entry: `${ROOT_DIR}/index.ts`,
        mode: 'development',
        output: {
            path: `${ROOT_DIR}/build`,//genera la ruta
            filename: 'index.[contenthash].js',//nombre del archivo de salida
            clean: true,//elimina lo que se tenga en la carpeta dist y lo crea nuevamente
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js'],
        },
        module: {
            rules: [
                {
                    test: [/\.tsx?$/, /\.jsx?$/, /\.ts?$/, /\.js?/],
                    use: 'babel-loader',
                    exclude: '/node_modules'
                },
                {
                    test: /\.html$/,
                    exclude: '/node_modules',
                    use: 'html-loader'
                },
                {
                    test: [/\.css$/, /\.scss$/],
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'sass-loader'
                    ]
                },
                {
                    test: /\.(png|svg|mp3|jpg|jpeg)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: 'assets/[name].[ext]'
                        }
                    ]
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: './index.html',
                template: `${ROOT_DIR}/public/index.html`,
                inject: true,
            }),
            new MiniCssExtractPlugin({
                filename: 'main.css'
            })
        ]
    };
};

export default InitConfigWebpack;