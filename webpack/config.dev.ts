import webpack from 'webpack';
import { configCommonWebpack } from './config.common';

//recomendable utilizar una función para webpack
const devConfigWebpack=(env: any, arg: any): webpack.Configuration=>{

    return {
        ...configCommonWebpack(env, arg),
        mode: 'development',
    };
};

export default devConfigWebpack;
