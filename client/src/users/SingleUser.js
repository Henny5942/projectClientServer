import axios from 'axios'
import {MdDelete} from "react-icons/md"
import updateUser from "./UpdateUser"

const SingleUser = ({user,fetchUsers}) => {
  return (
    <div>
        {user.name}
        <updateUser user={user} fetchUsers={fetchUsers}/>
        {/* <button onClick={()=>{deleteUser()}}><MdDelete /></button> */}
    </div>
  )
}

export default SingleUser