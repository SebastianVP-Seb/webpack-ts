import webpack from 'webpack';
import { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { configCommonWebpack, ROOT_DIST } from './config.common';

interface IWebpackConfigDev extends webpack.Configuration {
    devServer?: DevServerConfiguration
};

//recomendable utilizar una función para webpack
const devConfigWebpack=(env: any, arg: any): IWebpackConfigDev=>{

    return {
        ...configCommonWebpack(env, arg),
        mode: 'development',
        devServer: {
            static: ROOT_DIST,
            port: 8080,
            open: true,
            historyApiFallback: true,
            liveReload: true,
            hot: true
        }
    };
};

export default devConfigWebpack;
