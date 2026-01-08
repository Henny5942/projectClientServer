import axios from 'axios'
import {MdDelete} from "react-icons/md"
import UpdatePost from "./UpdatePost"
import { IconButton } from '@mui/material'

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
        <IconButton
          onClick={() => deletePost()}
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

export default SinglePost