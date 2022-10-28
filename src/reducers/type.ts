import { IToDo } from '../descriptor/types';

export type TypeActionAdd = {
    type: 'add';
    payload: IToDo;
};

export type TypeActionDelete = {
    type: 'delete';
    payload: string;
};

export type TypeActionToggleChecked = {
    type: 'toggleChecked';
    payload: string;
};

export type TypeActionToDoReducer = TypeActionAdd | TypeActionDelete | TypeActionToggleChecked;