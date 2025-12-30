import axios from 'axios'
import {MdDelete} from "react-icons/md"

const SinglePost = ({post,fetchPosts}) => {
        const deletePost= async()=>{
        const {data}=await axios.delete("http://localhost:4000/api/posts/"+post._id)
        fetchPosts()
    }
  return (
    <div>
        <h3>{post.title}</h3>
        <button onClick={()=>{deletePost()}}><MdDelete /></button>
    </div>
  )
}

export default SinglePost