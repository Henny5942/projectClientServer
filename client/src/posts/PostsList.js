import axios from "axios"
import { useEffect, useState } from "react"
import SinglePost from "./SinglePost"
import {NavLink} from "react-router-dom"


const PostsList = () => {
    const [posts,setPosts]= useState([])
    const fetchPosts = async ()=>{
        const {data}= await axios.get("http://localhost:4000/api/posts/")
        setPosts(data)
    }
    useEffect(()=>{
        fetchPosts()
    },[])
  return (
    <>
        {posts.map(post=>{
            return <div>
                <SinglePost post={post} fetchPosts={fetchPosts}/>
            </div>
        })}
        <NavLink to="add" >add post</NavLink>
    </>
  )
}

export default PostsList
