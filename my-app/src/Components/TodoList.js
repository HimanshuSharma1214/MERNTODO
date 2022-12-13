import './TodoList.css'
import React from 'react'
import CheckIcon from '@mui/icons-material/Check';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
function TodoList(props){
    const todoList=props.todoList.map((task,index)=>{
        const taskComplete=task=>{
            axios.put(`http://localhost:5000/updateData/${task._id}`,{
                _id:task._id,
                todo:task.todo,
                isComplete:!task.isComplete
            }).then(res=>props.taskComplete(res.data)).catch(err=>console.log(err))
        }
        const removeTask=(id)=>{
            axios.delete(`http://localhost:5000/deleteData/${id}`)
        .then(res=>props.removeTask(res.data)).catch(err=>console.log(err))
        }
        return <li key={index}>
            <div>
              <CheckIcon classNmae={task.isComplete?'isComplete':'checkicon'}/>
              <p className={task.isComplete ? 'taskComplete':''} onClick={()=>{
                taskComplete(task)
              }}>{task.todo}</p>    
            </div>
            <div>
             <EditIcon className='edit'>

             </EditIcon>
             <CloseIcon className='close' onClick={()=>{
                removeTask(task._id)
             }}></CloseIcon>
            </div>
        </li>
    })
    return(
        <div className='taskList'>
            <ul>
                {todoList}
            </ul>
        </div>
    )
}
export default TodoList