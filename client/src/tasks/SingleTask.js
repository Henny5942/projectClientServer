import axios from 'axios'
import {MdDelete} from "react-icons/md"
import UpdateTask from './UpdateTask';
import { IconButton } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';


const SingleTask = ({task,fetchTasks}) => {
    const deleteTask= async()=>{
        const {data}=await axios.delete("http://localhost:4000/api/tasks/"+task._id)
        if(!data)
          alert("not deleted")
        fetchTasks()
    }

    const updateComplete= async()=>{
      const {data}=await axios.put("http://localhost:4000/api/tasks/updateComplete",{id:task._id})
      if(data)
        fetchTasks()
    }
    

  return (
    <div>
        <h3 style={{textDecoration: task.completed ? "line-through" : "none",color: task.completed ? "gray" : "black"}}>{task.title}</h3>
        <div> {task.tags.map((t,i)=>{return i===0? t : ", "+t})}</div>
        <Checkbox checked={task.completed} onChange={(e) => updateComplete()} />
        <UpdateTask task={task} fetchTasks={fetchTasks}/>
        <IconButton
          onClick={() => deleteTask()}
          sx={{
            backgroundColor: '#d32f2f',
            color: 'white',
            '&:hover': {
              backgroundColor: '#9a0007',
              transform: 'scale(1.1)',
            },
            transition: 'all 0.2s ease-in-out',
            ml: 1,
          }}
        >
          <MdDelete />
        </IconButton>
        
    </div>
    
  )
}

export default SingleTask