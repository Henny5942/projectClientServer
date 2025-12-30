const Photo=require("../models/Photo")

const getAllPhotos= async (req,res)=>{
    const photos=await Photo.find()
        if(!photos)
            return res.send("No photos")
        res.json(photos)
}
const getPhotoById= async(req,res)=>{
    const {id}=req.params
    const photo= await Photo.findById(id)
    if(!photo)
        return res.status(400).send("Photo not found")
    return res.json(photo)
}


const createPhoto= async (req,res)=>{
    const {title, imageUrl}=req.body
        if(!title)
            return res.status(400).send("title is required")
        const photo= await Photo.create({title,imageUrl})
        if(!photo)
            return res.send("error")
        res.json(photo)
}

const updatePhoto= async(req,res)=>{
    const {id,title,imageUrl}=req.body
        if(!id || !title)
            return res.status(400).send("id title are required")
        const photo= await Photo.findById(id)
        if(!photo)
            return res.status(400).send("not found")
        photo.title=title
        photo.imageUrl=imageUrl
        const newPhoto=await photo.save()
        res.json(newPhoto)
}

const deletePhoto= async(req,res)=>{
    const {id}=req.params
    const photo=Photo.findById(id)
    if(!photo)
        return res.status(400).send("photo not found")
    const deletePhoto= await photo.deleteOne()
    res.send(`Photo with id ${id} deleted`)
}

module.exports= {getAllPhotos,getPhotoById,createPhoto,updatePhoto,deletePhoto}