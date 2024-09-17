import './Appx.css'
import { TaskContext } from './TaskContext'
import TaskCard from './TaskCard'
import {useContext} from "react";

function First() {
  const {lista}= useContext(TaskContext)
  return (
    <div >
    <div id={lista.Id} className='cositas'>
    {lista.map((lista,i)=>( 
    <div key={i}><TaskCard lista={lista} i={i} /></div>
    ))}
    </div>
    </div>
  )
}

export default First