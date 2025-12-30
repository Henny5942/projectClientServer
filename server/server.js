require("dotenv").config()
const express=require("express")
const cors= require("cors")
const corsOptions=require("./config/corsOptions")
const conectDB= require("./config/dbConn")
const connectDB = require("./config/dbConn")
const { default: mongoose } = require("mongoose")

const app=express()
const PORT=process.env.PORT || 2500
connectDB()

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.static("public"))

app.use("/api/users",require('./routes/userRoute'))
app.use("/api/tasks",require('./routes/taskRouter'))
app.use("/api/posts",require('./routes/postRoute'))
app.use("/api/photos",require('./routes/photoRoute'))

app.get("/",(req,res)=>{
    res.send("this is the home page!!!")
})

mongoose.connection.once('open',()=>{
    console.log('Connected to mongoDB')
    app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
    })
})

mongoose.connection.on('error',err=>{console.log(err)})
