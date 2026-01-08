import axios from "axios"
import { useEffect, useState } from "react"
import SinglePost from "./SinglePost"
import AddNewPost from "./AddNewPost"
import SearchPost from "./SearchPost"

const PostsList = () => {
    const [posts,setPosts]= useState([])
    const[allPosts,setAllPosts]=useState([])
    const fetchPosts = async ()=>{
        const {data}= await axios.get("http://localhost:4000/api/posts/")
        if(data)
            setPosts(data.sort((a,b)=>a._id-b._id))
            setAllPosts(data.sort((a,b)=>a._id-b._id))
        
    }
    useEffect(()=>{
        fetchPosts()
    },[])
  return (
    <>
        <SearchPost setPosts={setPosts} allPosts={allPosts}/>
        <AddNewPost fetchPosts={fetchPosts}/>
        {posts.map(post=>{
            return <div>
                <SinglePost post={post} fetchPosts={fetchPosts}/>
            </div>
        })}
        
    </>
  )
}

export default PostsList
