import axios from "axios"
import { useEffect, useState } from "react"
import SingleTask from "./SingleTask"
import AddNewTask from "./AddNewTask"
import SearchTask from "./SearchTask"



const TasksList = () => {
    const [tasks,setTasks]= useState([])
    const [allTasks, setAllTasks]= useState([])
    const fetchTasks = async ()=>{
        const {data}= await axios.get("http://localhost:4000/api/tasks/")
        if(data)
            setTasks(data.sort((a,b)=>a._id-b._id))
            setAllTasks(data.sort((a,b)=>a._id-b._id))
    }
    useEffect(()=>{
        fetchTasks()
    },[])
  return (
    <>
        <SearchTask setTasks={setTasks} allTasks={allTasks}/>
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