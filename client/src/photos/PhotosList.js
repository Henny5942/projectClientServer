import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import AddNewPhoto from "./AddNewPhoto"
import UpdatePhoto from "./UpdatePhoto"

import {MdDelete} from "react-icons/md"
import axios from "axios"
import { useEffect, useState } from "react"

export default function TitlebarImageList() {

  const [photos,setPhotos]= useState([])
    const fetchPhotos = async ()=>{
        const {data}= await axios.get("http://localhost:4000/api/photos/")
        setPhotos(data)
    }
    useEffect(()=>{
        fetchPhotos()
    },[photos])


    const deletePhoto= async(photo)=>{
        const {data}=await axios.delete("http://localhost:4000/api/photos/"+photo._id)
        if(!data)
          alert("not deleted")
        fetchPhotos()
    }

  return (
    <>
    <AddNewPhoto fetchPhotos={fetchPhotos}/>
    <ImageList sx={{ width: 1200, height: 500,margin:2, padding:2 }}>
      <ImageListItem key="Subheader" cols={2}>
        <h1>Photos</h1>
      </ImageListItem>
      {photos.map((photo) => (
        <ImageListItem key={photo.imageUrl}>
          <img
            srcSet={"http://localhost:4000/"+photo.imageUrl}
            src={"http://localhost:4000/"+photo.imageUrl}
            alt={photo.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={photo.title}
            
            actionIcon={
              <>
              <UpdatePhoto photo={photo} fetchPhotos={fetchPhotos}/>
              <IconButton 
                sx={{ color: '#d32f2f', height:80,'&:hover': {
                  color: '#9a0007',
                  transform: 'scale(1.1)',
                },}}
                aria-label={`info about ${photo.title}`}
                onClick={()=>{deletePhoto(photo)}}
                >
                <MdDelete />
              </IconButton>
             
              </>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
    </>
  );
}

