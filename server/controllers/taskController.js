const Task=require("../models/Task")

const getAllTasks= async (req,res)=>{
    const tasks=await Task.find()
    if(!tasks)
        return res.send("No tasks")
    res.json(tasks)
}

const getTaskById= async(req,res)=>{
    const {id}=req.params
    const task= await Task.findById(id)
    if(!task)
        return res.status(400).send("Task not found")
    return res.json(task)
}

const createTask= async (req,res)=>{
    const {title, tags}=req.body
    if(!title)
        return res.status(400).send("title is required")
    const task= await Task.create({title,tags})
    if(!task)
        return res.send("error")
    res.json(task)
}

const updateTask=async (req,res)=>{
    const {id,title,tags}=req.body
    if(!id || !title)
        return res.status(400).send("id title are required")
    const task= await Task.findById(id)
    if(!task)
        return res.status(400).send("not found")
    task.title=title
    task.tags=tags
    const newTask=await task.save()
    res.json(newTask)
 }

 const updateTaskComplete= async (req,res)=>{
    const {id}= req.body
    if(!id)
        return req.send("the id and complete are required")
    const task= await Task.findById(id)
    if(!task)
        return res.status(400).send("not found")
    task.completed=!task.completed
    const newTask=await task.save()
    res.json(newTask)
 }

 const deleteTask= async(req,res)=>{
     const {id}=req.params
     const task= await Task.findById(id)
     if(!task)
         return res.status(400).send("task not found")
    const deletetask=await task.deleteOne()
    res.send(`Task with id ${id} deleted`)
 }

 module.exports = {getAllTasks,getTaskById,createTask,updateTask,updateTaskComplete,deleteTask}