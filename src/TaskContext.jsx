import { createContext,useState,useEffect } from "react"
import Formu from './Formu'
export const TaskContext = createContext()

export function TaskContextProvider(props){
    const[lista,setLista]=useState([]);
  useEffect(()=>{setLista(Formu)},[])

function Crear(t,a){
setLista([...lista,{
  Nombre: t,
  Edad:a,
  Id: lista.length,
  Imagen:'https://robohash.org/'
}])
  }
  function Eliminar(e){
    setLista(lista.filter( a => a !== lista[e.target.id]))
  }
    return(
        <TaskContext.Provider value={{
            Eliminar,
            Crear,
            lista
        }
        }>
        {props.children}
        </TaskContext.Provider>
    )
}
