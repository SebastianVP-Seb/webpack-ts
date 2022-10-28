import { IToDo } from '../descriptor/types';
import { TypeActionAdd, TypeActionDelete, TypeActionToggleChecked } from '../reducers/type';

export const ActionAddToDo=(toDo: IToDo): TypeActionAdd=>({
    type: 'add',
    payload: toDo 
});

export const ActionDeleteToDo=(id: string): TypeActionDelete=>({
    type: 'delete',
    payload: id
});

export const ActionToggleCheckedToDo=(id: string): TypeActionToggleChecked=>({
    type: 'toggleChecked',
    payload: id
});