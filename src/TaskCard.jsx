import './Appx.css'
import { useContext} from "react";
import { TaskContext } from './TaskContext'

function TaskCard({i,lista}){
    const {Eliminar} = useContext(TaskContext)
    return(<div>
<img src={lista.Imagen+lista.Nombre}/>
<h1>
{lista.Nombre} 
<br/>{lista.Edad} años</h1>
<button id={i} onClick={Eliminar}>Eliminar</button>
</div>  )
}
export default TaskCard