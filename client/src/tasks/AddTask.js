import axios from "axios"
import { useState } from "react"
import {useNavigate} from "react-router-dom"

const AddTask = () => {
  const navigate=useNavigate()
  const [title,setTitle]=useState("")
  const addTask = async (e)=>{
    e.preventDefault()
    const {data}=await axios.post("http://localhost:4000/api/tasks",{title})
    setTitle("")
    navigate("/tasks")
  }
  return (
    <div>
      <form onSubmit={addTask}>
        <input value={title} placeholder="Add title" required={true} onChange={(e)=>{setTitle(e.target.value)}}/>
        <button type="submit">add task</button>
      </form>
    </div>
  )
}

export default AddTask