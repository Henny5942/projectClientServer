import axios from "axios"
import { useState } from "react"
import { useNavigate} from "react-router-dom"

const AddPost = () => {
  const navigate=useNavigate()
  const [title,setTitle]=useState("")
  const addPost = async (e)=>{
    e.preventDefault()
    const {data}= axios.post("http://localhost:4000/api/posts",{title})
    setTitle("")
    navigate("/posts")
  }
  return (
    <div>
      <form onSubmit={addPost}>
        <input value={title} placeholder="Add title" required={true} onChange={(e)=>{setTitle(e.target.value)}}/>
        <button type="submit">add post</button>
      </form>
    </div>
  )
}

export default AddPost
