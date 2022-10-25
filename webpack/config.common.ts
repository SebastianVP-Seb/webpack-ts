import path from 'path';
import webpack, { RuleSetRule, WebpackPluginInstance } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const ROOT_DIR=path.resolve(__dirname, '../');

const loadersWebpack: Array<(RuleSetRule|"...")>=[
    {
        test: [/\.tsx?$/, /\.jsx?$/, /\.ts?$/, /\.js?/],
        use: 'babel-loader',
        exclude: '/node_modules/'
    },
    {
        test: /\.html$/,
        exclude: '/node_modules/',
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
];

const pluginsWebpack: Array<WebpackPluginInstance> = [
    new HtmlWebpackPlugin({
        filename: './index.html',
        template: `${ROOT_DIR}/public/index.html`,
        inject: true,
    }),
    new MiniCssExtractPlugin({
        filename: 'main.css'
    })
];

//recomendable utilizar una función para webpack
export const configCommonWebpack=(env: any, arg: any): webpack.Configuration=>{

    return {
        entry: `${ROOT_DIR}/index.ts`,
        output: {
            path: `${ROOT_DIR}/dist`,//genera la ruta
            filename: 'index.[contenthash].js',//nombre del archivo de salida
            clean: true,//elimina lo que se tenga en la carpeta dist y lo crea nuevamente
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js'],
        },
        module: {
            rules: loadersWebpack
        },
        plugins: pluginsWebpack,
    };
};
