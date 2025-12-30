const Post=require("../models/Post")

const getAllPosts= async(req,res)=>{
    const posts=await Post.find()
    if(!posts)
        return res.send("No posts")
    res.json(posts)
}

const getPostById= async(req,res)=>{
    const {id}=req.params
    const post= await Post.findById(id)
    if(!post)
        return res.status(400).send("Post not found")
    return res.json(post)
}


const createPost= async (req,res)=>{
    const {title,body}=req.body
    if(!title)
        return res.status(400).send("title is required")
    const post= await Post.create({title,body})
    if(!post)
        return res.send("error")
    res.json(post)
    }
    
 const updatePost=async (req,res)=>{
    const {id,title,body}=req.body
    if(!id || !title)
        return res.status(400).send("id title are required")
    const post= await Post.findById(id)
    if(!post)
        return res.status(400).send("not found")

    post.title=title
    post.body=body
    const newPost=await post.save()
    res.json(newPost)

 }


const deletePost= async(req,res)=>{
    const {id}=req.params
    const post= await Post.findById(id)
    if(!post)
        return res.status(400).send("post not found")
        const deletePost=await post.deleteOne()

        res.send(`Post with id ${id} deleted`)
}
 
module.exports= {getAllPosts,getPostById,createPost,updatePost,deletePost}