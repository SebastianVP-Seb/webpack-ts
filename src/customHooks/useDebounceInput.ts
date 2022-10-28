import React from 'react';

/*Permitirá el delay en el input al ir escribiendo en él, para evitar que busque con cada tecla que
se presiona y dar un tiempo para realizar la búsqueda */
export const useDebounceInput=<T>(delay: number, initValue: T) : [
    T, React.Dispatch<React.SetStateAction<T>>, T
] => {
    const [valueInput,setValueInput]=React.useState(initValue);
    const [debounceValue, setDebounceValue]=React.useState(valueInput);

    React.useEffect(()=>{
        const handle=setTimeout(()=>{
            setDebounceValue(valueInput);
        }, delay);

        return ()=>{
            clearTimeout(handle);
        };
    }, [valueInput, delay]);
    return [ valueInput, setValueInput, debounceValue ];
};