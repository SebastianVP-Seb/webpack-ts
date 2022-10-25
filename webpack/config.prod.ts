import webpack from 'webpack';
import TerserWebpackPlugin from 'terser-webpack-plugin';
import { configCommonWebpack } from './config.common';

//recomendable utilizar una función para webpack
const prodConfigWebpack=(env: any, arg: any): webpack.Configuration=>{

    return {
        ...configCommonWebpack(env, arg),
        mode: 'production',
        optimization: {
            minimize: true,
            minimizer: [
                new TerserWebpackPlugin({
                    extractComments: true,
                })
            ]
        }
    };
};

export default prodConfigWebpack;
