import { IToDo } from '../descriptor/types';
import { TypeActionToDoReducer } from './type';

const initState: Array<IToDo>=[];

const action={
    // type: 'add' => el payload sería la tarea creada
    // type: 'delete' => el payload sería el id a elimimnar
    // type: 'toggleChecked'=> el payload sería el id a poner en done
};

export const todoReducer=(state = initState, action: TypeActionToDoReducer)=>{

    console.log(action);

    switch (action.type) {
        case 'add':
            return [
                action.payload, //Para que la nueva tarea aparezca al principio
                ...state
            ];
        
        case 'delete':
            return state.filter(item=>item.id!==action.payload);

        case 'toggleChecked':
            return state.map(item=>item.id===action.payload ? {...item, isDone: !item.isDone} : item);
    
        default: return state;
    };
};
