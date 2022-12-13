import './AddTask.css';
import React,{useState} from 'react'
import axios from 'axios';
function AddTask(props){
    const [task,setTask]=useState("");
    const addTask=()=>{
        if(task.trim()===''){
            return
        }else{
            axios.post('http://localhost:5000/createData',{
                todo : task,
                isComplete : false
            }).then((res)=>{
                setTask("")
                props.addTask(res.data)
            }).catch(err=>console.log(err))
        }
    }
    return(
        <div className='addTask'>
            <input type="text" placeholder='Enter a Todo...' value={task} onChange={(event)=>setTask(event.target.value)}/>
            <button onClick={(()=>addTask())}>Add Task</button>
        </div>
    )
}
export default AddTask;

