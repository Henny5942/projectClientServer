const mongoose=require("mongoose")

const userSchema= new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    username:{
        type:String,
        required: true,
        unique: true,
        lowercase:true,
        trim: true,
    },
    email:{
        type:String,
        lowercase:true,
        trim:true
    },
    address:{
        street:String,
        city:String,
        building:Number
    },
    phone:String
},{timestamps:true})

module.exports= mongoose.model("User",userSchema)