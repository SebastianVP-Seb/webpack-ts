import React from 'react';
import { getIconByPriority } from './utils/getIconByPriority';
import { IconType } from 'react-icons';
import { GiCrossMark, GiSelfLove } from "react-icons/gi";
import './styles/itemToDo.scss';
import { IItemToDoComp } from './types';
import { useTheme } from './customHooks/useTheme';

const ItemToDo: React.FC<IItemToDoComp> = ({id, isDone, priority, title, toggleDone, deleteItem}) => {

  const IconPriority: IconType =getIconByPriority(priority);

  //sin memo y useCallback en la función: se renderizan todos los elementos de la lista, con ellos:
  //sólo se renderiza el que cambió
  React.useEffect(()=>console.log('renderizando ItemToDoComp'));

  const { theme } = useTheme();

  return (
      <a key={id} className={`panel-block is-active container_todo ${isDone && 'is_done'}`} onClick={()=>toggleDone(id)} >
        {/* <span className="panel-icon"></span> */}
        <span className="panel-icon ">
          <IconPriority />
        </span>    
        <h4 >{title}</h4>  
        <span className="panel-icon is-active">
        {
          isDone
          ? (<GiSelfLove />)
          : (<GiCrossMark />)
        }
        </span>
        <button className={`button ${theme}`} onClick={()=>deleteItem(id)} >
          Eliminar
        </button>
      </a>
  );
};

export default React.memo(ItemToDo);