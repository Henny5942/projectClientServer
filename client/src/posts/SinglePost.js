import axios from 'axios'
import {MdDelete} from "react-icons/md"
import UpdatePost from "./UpdatePost"

const SinglePost = ({post,fetchPosts}) => {
        const deletePost= async()=>{
        const {data}=await axios.delete("http://localhost:4000/api/posts/"+post._id)
        if(!data)
          alert("not deleted")
        fetchPosts()
    }
  return (
    <div>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <UpdatePost post={post} fetchPosts={fetchPosts}/>
        <button onClick={()=>{deletePost()}}><MdDelete /></button>
    </div>
  )
}

export default SinglePost