import { useState,useContext} from "react";
import { TaskContext } from './TaskContext'
import './Appx.css'
 function Second(){
    const {Crear}= useContext(TaskContext)
    const[tarea,setTarea]=useState("")
    const[anos,setAnos]=useState("")
    return(<div className="holo">
        <form onSubmit={(e)=>{ 
            e.preventDefault()
            Crear(tarea,anos)
            setAnos("")
            setTarea("")

            }}>
            <input onChange={(e)=>setTarea(e.target.value)} value={tarea}>
            </input>
            <input type="number" onChange={(e)=>setAnos(e.target.value)} value={anos}  /> 
            <button className="boton">Guardar</button>
        </form>
        </div>
    )
 }

 export default Second