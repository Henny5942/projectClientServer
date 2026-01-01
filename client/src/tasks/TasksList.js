import axios from "axios"
import { useEffect, useState } from "react"
import SingleTask from "./SingleTask"
import AddNewTask from "./AddNewTask"



const TasksList = () => {
    const [tasks,setTasks]= useState([])
    const fetchTasks = async ()=>{
        const {data}= await axios.get("http://localhost:4000/api/tasks/")
        if(data)
            setTasks(data.sort((a,b)=>a._id-b._id))
    }
    useEffect(()=>{
        fetchTasks()
    },[])
  return (
    <>
        <AddNewTask fetchTasks={fetchTasks}/>
        {tasks.map(task=>{
            return <div>
                <SingleTask task={task} fetchTasks={fetchTasks}/>
            </div>
        })}
        
    </>
  )
}

export default TasksList