import React, { useMemo } from 'react';
import './styles/index.scss';
import Hero from './Hero';
import Tabs from './Tabs';
import { TypeIdTab, uniqueIdTab } from './descriptor/types';
import FormToDo from './FormToDo';
import PanelToDo from './PanelToDo';
import { todoReducer } from './reducers/todo.reducer';
import { mockToDos } from './utils/mockToDos';
import { ThemeContext, ThemeProvider } from './context';

const ToDoListApp = () => {

  const [toDos, dispatch]=React.useReducer(todoReducer, [], ()=>mockToDos);
  const [tabSelected, setTabSelected]=React.useState<TypeIdTab>(uniqueIdTab.ALL);

  // console.log(stateReducer);

  /*Crear una f que a través del id pueda determinar qué tab es el que está seleccionado */
  const getTabSelected=(id: TypeIdTab)=>{
    console.log({id});
    setTabSelected(id);
  };

  //Para filtrar las tareas en el panel
  const todosFiltered=useMemo(()=>{
    return toDos.filter(item=>{
      if (tabSelected===uniqueIdTab.ALL) return item;
      if (tabSelected===uniqueIdTab.PENDIENTES) return !item.isDone && item;
      if (tabSelected===uniqueIdTab.COMPLETADOS) return item.isDone && item;
    });
  }, [toDos, tabSelected]);

  //Para comprobar el funcionamiento del reducer:
  // React.useEffect(()=>{
  //   //Comprobando la acción de eliminar
  //   console.log(todoReducer(mockToDos, {type: 'delete', payload: 'tarea_9e789c50-1309-4982-877c-331a3d126b8d'}));

  //   //Comprobando toggleChecked
  //   console.log(todoReducer(mockToDos, {type: 'toggleChecked', payload: 'tarea_d369f78c-e3d8-4e41-ba71-186376a76740'}));

  //   //Comprobando agregar una nueva tarea
  //   console.log(todoReducer(mockToDos, {type: 'add', payload: {
  //     id: 'idNuevo',
  //     isDone: false,
  //     title: 'Nueva tarea test',
  //     priority: 1
  //   }}))
  // }, []);

  //Demostración de ejecución de un comp declarado como una cte
  const HeroRender = <Hero title='iAmSebastian' subtitle='ToDoList'/>;

  return (
    <ThemeProvider>
      {HeroRender}
      <FormToDo dispatch={dispatch} />
      <Tabs getTabSelected={getTabSelected} />
      <PanelToDo toDosFiltered={todosFiltered} dispatch={dispatch} />
    </ThemeProvider>
  );
};

export default ToDoListApp;