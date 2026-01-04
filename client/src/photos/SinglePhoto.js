import axios from 'axios'
import {MdDelete} from "react-icons/md"
import UpdatePhoto from "./UpdatePhoto"



const SinglePhoto = ({photo,fetchPhotos}) => {
        const deletePhoto= async()=>{
        const {data}=await axios.delete("http://localhost:4000/api/photos/"+photo._id)
        if(!data)
          alert("not deleted")
        fetchPhotos()
    }

  return (
    <div>
        <h3>{photo.title}</h3>
        <img src={"http://localhost:4000/"+photo.imageUrl}  width={150} />
        <UpdatePhoto photo={photo} fetchPhotos={fetchPhotos}/>
        <button onClick={()=>{deletePhoto()}}><MdDelete /></button>
    </div>
  )
}

export default SinglePhoto