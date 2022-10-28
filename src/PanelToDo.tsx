import React from 'react';
import { itemsPriority } from './descriptor/itemsPriority';
import { IToDo, TypePriority, uniqueIdPriority } from './descriptor/types';
import ItemToDo from './ItemToDo';
// import { mockToDos } from './utils/mockToDos';
import { ActionDeleteToDo, ActionToggleCheckedToDo } from './actions/toDo.actions';
import { searchGenericToDos } from './utils/searchGeneric';
import { IPanelToDoComp } from './types';
import { useDebounceInput } from './customHooks/useDebounceInput';
import { useTheme } from './customHooks/useTheme';

const PanelToDo: React.FC<IPanelToDoComp> = ({toDosFiltered, dispatch}) => {

    const [priorityTabs, setPriorityTabs]=React.useState(itemsPriority);

    //Se extraen en el orden en que se mandan del hook
    const [ inputSearch, setInputSearch, debounceValue ]=useDebounceInput(1000, '');
    // const [toDosList, setToDosList]=React.useState(mockToDos);

    const {theme} = useTheme();

    //para seleccionar un tab:
    const selectActiveTab=(id: TypePriority)=>{
      setPriorityTabs(
        prevState=>
          prevState.map((item)=>
            item.id===id
            ? {...item, isActive: true}
            : {...item, isActive: false}
          )
      );
    };

    //Para marcar una tarea como hecha o no
    const toggleDone=React.useCallback((id: string)=>{
      // setToDosList(
      //   prevState=>
      //     prevState.map((item)=>
      //       item.id===id
      //       ? {...item, isDone: !item.isDone}
      //       : {...item, item}
      //       )
      // );
      dispatch(ActionToggleCheckedToDo(id));
    }, []);

    const handleDeleteToDo=React.useCallback((id: string)=>{
      dispatch(ActionDeleteToDo(id));
    }, []);

    //filtrando
    const toDos=React.useMemo<Array<IToDo>>(()=>{
      const tabSelected=priorityTabs.find(item=>item.isActive)?.id.toString() || uniqueIdPriority.All.toString();
      return toDosFiltered.filter(item => tabSelected === '0'
          ? item
          : searchGenericToDos(item, ['priority'], tabSelected))
          //Para filtrar por la búsqueda
          //Por la lógica del searchGeneric se tiene que hacer la validación negativa
          .filter(item => debounceValue !== ''
            ? searchGenericToDos(item, ['title'], debounceValue)
            : item)
    }, [toDosFiltered, priorityTabs, debounceValue]);

  return (
    <article className={`panel ${theme}`}>
      <p className="panel-heading">
        Danger
      </p>
      <p className="panel-tabs">
        {
          priorityTabs.map((item)=>(
            <a 
              className={`${theme} ${item.isActive ? 'is-active': ''}`}
              key={item.id} 
              onClick={()=>selectActiveTab(item.id as TypePriority)} 
            ><span>{item.Icon && <item.Icon/>}</span> {item.label}</a>
          ))
        }
      </p>
      <div className="panel-block">
        <p className="control has-icons-left">
          <input 
            className={`input ${theme}`} 
            type="text" 
            placeholder="Search" 
            value={inputSearch} 
            onChange={({target})=>setInputSearch(target.value)}
          />
          <span className="icon is-left">
            <i className="fas fa-search" aria-hidden="true"></i>
          </span>
        </p>
      </div>
      {
        // mockToDos.map(ItemToDo) Puede ser
        // toDosFiltered.map((item)=>(
          toDos.map((item)=>(
          <ItemToDo 
            id={item.id} 
            isDone={item.isDone} 
            title={item.title} 
            priority={item.priority} 
            key={item.id}
            toggleDone={toggleDone}
            deleteItem={handleDeleteToDo}
          />
        ))
      }
    </article>
  );
};

export default PanelToDo;
