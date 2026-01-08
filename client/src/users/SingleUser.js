import axios from 'axios'
import {MdDelete} from "react-icons/md"
import UpdateUser from "./UpdateUser"
import { IconButton } from '@mui/material'

const SingleUser = ({user,fetchUsers}) => {
  const deleteUser= async()=>{
          const {data}=await axios.delete("http://localhost:4000/api/users/"+user._id)
          if(!data)
            alert("not deleted")
          fetchUsers()
      }
  return (
    <div>
        <h3>{user.name}</h3>
        <p>username: {user.username}</p>
        {user.email && <p>email: {user.email}</p>}
        {user.phone && <p>phone: {user.phone}</p>}
        {(user.address?.city || user.address?.street) && <p>address: {user.address?.street} {user.address?.building!==0 && user.address?.building} {user.address?.city}</p>}
        
        
        {/* <p> {user.email}</p>
        <p> {user.phone}</p> */}
        <UpdateUser user={user} fetchUsers={fetchUsers}/>  
        <IconButton
          onClick={() => deleteUser()}
          sx={{
            backgroundColor: '#d32f2f',
            color: 'white',
            '&:hover': {
              backgroundColor: '#9a0007',
              transform: 'scale(1.1)',
            },
            transition: 'all 0.2s ease-in-out',
            ml: 1,
          }}
        >
          <MdDelete />
        </IconButton>
    </div>
  )
}

export default SingleUser