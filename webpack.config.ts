import path from 'path';
import webpack from 'webpack';

const ROOT_DIR=path.resolve(__dirname);

//recomendable utilizar una función para webpack
const InitConfigWebpack=(env: any, arg: any): webpack.Configuration=>{

    return {
        entry: `${ROOT_DIR}/index.ts`,
        mode: 'development',
        output: {
            path: `${ROOT_DIR}/build`,//genera la ruta
            filename: 'index.js',//nombre del archivo de salida
            clean: true,//elimina lo que se tenga en la carpeta dist y lo crea nuevamente
        },
    };
};

export default InitConfigWebpack;