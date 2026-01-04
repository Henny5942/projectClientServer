import axios from "axios"
import { useEffect, useState } from "react"
import AddNewPhoto from "./AddNewPhoto"
import SinglePhoto from "./SinglePhoto"
import ShowPhotos from "./ShowPhotos"

const PhotosList = () => {
    const [photos,setPhotos]= useState([])
    const fetchPhotos = async ()=>{
        const {data}= await axios.get("http://localhost:4000/api/photos/")
        setPhotos(data.sort((a,b)=>a._id-b._id))
    }
    useEffect(()=>{
        fetchPhotos()
    },[])
  return (
    <>
        <AddNewPhoto fetchPhotos={fetchPhotos}/>

        {photos.map(photo=>{
            return <div>
                <SinglePhoto photo={photo} fetchPhotos={fetchPhotos}/>
            </div>
        })}
        

    </>
  )
}

export default PhotosList
