const User=require("../models/User")

const getAllUsers= async(req,res)=>{
    const users=await User.find()
    if(!users)
        return res.send("No users")
    res.json(users)
}

const getUserById= async(req,res)=>{
    const {id}=req.params
    const user= await User.findById(id)
    if(!user)
        return res.status(400).send("User not found")
    return res.json(user)
}


const createUser= async (req,res)=>{
    const {name,username,email, address, phone}=req.body
    if(!name || ! username)
        return res.status(400).send("name and username are required")
    const user= await User.create({name,username,email, address, phone})
    if(!user)
        return res.send("error")
    res.json(user)
    }
    
 const updateUser=async (req,res)=>{
    const {id,name,username,email, address, phone}=req.body
    if(!id || !name || !username)
        return res.status(400).send("id name and username are required")
    const user= await User.findById(id)
    if(!user)
        return res.status(400).send("not found")

    user.name=name
    user.username=username
    user.email=email
    user.address=address
    const newUser=await user.save()
    res.json(newUser)

 }


const deleteUser= async(req,res)=>{
    const {id}=req.params
    const user= await User.findById(id)
    if(!user)
        return res.status(400).send("user not found")
        const deleteUser=await user.deleteOne()

        res.send(`User with id ${id} deleted`)
}
 
module.exports= {getAllUsers,getUserById,createUser,updateUser,deleteUser}