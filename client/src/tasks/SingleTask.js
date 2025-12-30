import axios from 'axios'
import {MdDelete} from "react-icons/md"
const SingleTask = ({task,fetchTasks}) => {
    const deleteTask= async()=>{
        const {data}=await axios.delete("http://localhost:4000/api/tasks/"+task._id)
        fetchTasks()
        
    }
    

  return (
    <div>
        <h3>{task.title}</h3>

        <button onClick={()=>{deleteTask()}}><MdDelete /></button>
        
    </div>
    
  )
}

export default SingleTask