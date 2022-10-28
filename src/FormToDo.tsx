import React, { FormEvent } from 'react';
import { AiFillZhihuCircle, AiFillAliwangwang } from "react-icons/ai";
import { IErrorsForm } from './types';
import { IToDo } from './descriptor/types';
import { TypeActionAdd } from './reducers/type';
import { ActionAddToDo } from './actions/toDo.actions';
import { useTheme } from './customHooks/useTheme';

let toDos: Array<IToDo>=[];

export interface IFormToDoComp {
  dispatch: (value: TypeActionAdd)=>void;
};

const FormToDo: React.FC<IFormToDoComp> = ({dispatch}) => {

    const [errors, setErrors]=React.useState<Array<IErrorsForm>>([]);
    const [iSToDoValid, setIsToDoValid]=React.useState(false);
    //Para evitar poner muchos estados
    const selectPriority=React.useRef<HTMLSelectElement>(null);
    const inputToDo=React.useRef<HTMLInputElement>(null);

    const {theme} = useTheme();

    const handleSubmitForm=(e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        console.log({
          toDoText: inputToDo.current?.value,
          //SelectIndex traerá los valores de los índices en que se encuentran las options 
          //(0 será inválido porque es 'Seleccionar la prioridad')
          priority: selectPriority.current?.selectedIndex
        });
        const {current: selectRef}=selectPriority; //después de los : puede ser cualquier valor (renombrándolo)
        const {current: inputRef}=inputToDo;

        const errorsForm: Array<IErrorsForm>=[];
        if(selectRef?.selectedIndex===0) {
          errorsForm.push({message: 'Debes seleccionar una prioridad'});
          selectRef.focus(); //Para enfocar el elemento donde hay un error
        }
        if (inputRef?.value==='') {
          errorsForm.push({message: 'Debes escribir una tarea'})
          inputRef.focus();
        }

        //Validando si el arreglo de errores tiene algún error entonces no se debe hacer el submit
        if (errorsForm.length === 0) {
          // console.log('No hay errores');
          const todo: IToDo = {
            id: `tarea_${crypto.randomUUID()}`,
            isDone: false,
            title: inputRef?.value || '',
            priority: selectRef?.selectedIndex || 0 
          };
          dispatch(ActionAddToDo(todo));
          toDos.push(todo);
          // console.log(todo);
          //Luego de pasar las dos validaciones:
          //Para limpiar el input, al tener una referencia
          if( typeof inputRef?.value === 'string') { //Debería tener un string válido
            inputRef.value='';
          };
          //Para poner la prioridad en cero:
          if(typeof selectRef?.selectedIndex === 'number') { //tiene un número válido
          selectRef.selectedIndex=0;
          }
        };
        setErrors(errorsForm);
        setIsToDoValid(true);
        console.log(toDos);
    };

    // const showAlertSuccess=()=>{
    //   setTimeout(()=>{
    //     return (
    //       <p className='help is-danger' >
    //             <span className="icon is-small"><AiFillAliwangwang /></span>Tarea agregada</p>
    //     )
    //   }, 2000);
    // };

  return (
    <form onSubmit={handleSubmitForm} className='field has-addons'>
        <div className="control">
          <span className={`select ${theme}`}>
            <select ref={selectPriority} placeholder='Seleccionar prioridad' className={`${theme}`}>
              <option>Prioridad</option>
              <option>Baja</option>
              <option>Media</option>
              <option>Alta</option>
            </select>
          </span>
        </div>
        <div className="control is-expanded">
          <input ref={inputToDo} className={`input ${theme}`} type="text" placeholder="Escribe aquí una tarea..." />
          {
            errors.length > 0 && errors.map((item)=>(
              <p key={item.message} className='help is-danger' >
                <span className="icon is-small"><AiFillAliwangwang /></span>{item.message}</p>
            ))
          }
          {/* {
            iSToDoValid 
              ? 
              (showAlertSuccess())
              : <></>
          } */}
        </div>
        <div className="control">
          <button className={`button ${theme}`} type='submit' >
            <span className="icon is-small">
              <AiFillZhihuCircle />
            </span>
            <span>
              Agregar tarea
            </span>
          </button>
        </div>        
    </form>
  );
};

export default FormToDo;
