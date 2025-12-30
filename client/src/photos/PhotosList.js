import axios from "axios"
import { useEffect, useState } from "react"

import {NavLink} from "react-router-dom"


const PhotosList = () => {
    const [photos,setPhotos]= useState([])
    const fetchPhotos = async ()=>{
        const {data}= await axios.get("http://localhost:4000/api/photos/")
        setPhotos(data)
    }
    useEffect(()=>{
        fetchPhotos()
    },[])
  return (
    <>
        {photos.map(photo=>{
            return <div>
                <img src={photo.imageUrl} alt={photo.title} width={150} />
                {/* <SinglePost post={post} fetchPhotos={fetchPhotos}/> */}
            </div>
        })}
        {/* <NavLink to="add" >add photo</NavLink> */}
    </>
  )
}

export default PhotosList
