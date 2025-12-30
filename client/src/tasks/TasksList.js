import axios from "axios"
import { useEffect, useState } from "react"
import SingleTask from "./SingleTask"
import {NavLink} from "react-router-dom"
import CardAddTask from "./CardAddTask"



const TasksList = () => {
    const [tasks,setTasks]= useState([])
    const fetchTasks = async ()=>{
        const {data}= await axios.get("http://localhost:4000/api/tasks/")
        setTasks(data)
    }
    useEffect(()=>{
        fetchTasks()
    },[])
  return (
    <>
        <CardAddTask fetchTasks={fetchTasks}/>
        {tasks.map(task=>{
            return <div>
                <SingleTask task={task} fetchTasks={fetchTasks}/>
            </div>
        })}
        {/* <NavLink to="add">add task</NavLink> */}
        
    </>
  )
}

export default TasksList