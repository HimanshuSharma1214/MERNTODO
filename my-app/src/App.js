import React,{useState, useEffect} from 'react'
import AddTask from './Components/AddTask'
import TodoList from './Components/TodoList'
import axios from 'axios'
import './App.css'
function App(){
  const [todoList,setTodoList]=useState([]);
  useEffect(()=>{
    axios.get('http://localhost:5000/getData/').then((res)=>{
      setTodoList(res.data)
     console.log(res.data)
    }).catch(err=>console.log(err))
  },[])
  const addTask=newTask=>{
    setTodoList([...todoList,newTask])
  }
  const taskComplete=task=>{
    const newList=[...todoList]
    newList.forEach(item=>{
      if(item._id===task._id){
        item.isComplete=task.isComplete
      }
    })
    setTodoList(newList)

  }
  const removeTask=task=>{
     const newList=todoList.filter(item=>!(item._id===task._id))
     setTodoList(newList)
  }

  return(
    <div>
    <AddTask addTask={addTask}/>
    <TodoList todoList={todoList} taskComplete={taskComplete} removeTask={removeTask}/>
    </div>
  )
}


export default App;
