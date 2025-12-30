import axios from "axios"
import { useEffect, useState } from "react"

import {NavLink} from "react-router-dom"


const UsersList = () => {
    const [users,setUsers]= useState([])
    const fetchUsers = async ()=>{
        const {data}= await axios.get("http://localhost:4000/api/users/")
        setUsers(data)
    }
    useEffect(()=>{
        fetchUsers()
    },[])
  return (
    <>
        {users.map(user=>{
            return <div>
                {user._id}
                {/* <SinglePost user={user} fetchUsers={fetchUsers}/> */}
            </div>
        })}
        {/* <NavLink to="add" >add user</NavLink> */}
    </>
  )
}

export default UsersList
