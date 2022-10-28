export const searchGenericToDos=<T>(data: T, properties: Array<keyof T>, query: string): boolean => {
    if(query !== '') {
        return properties.some(item=>{
            const value=data[item];
            if (typeof value=== 'number' || typeof value === 'string') {
                return value.toString().toUpperCase().includes(query.toUpperCase());
            };
            return false;
        });
    };
    return false;
};
