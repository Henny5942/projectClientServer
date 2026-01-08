import axios from "axios"
import { useEffect, useState } from "react"
import SingleUser from "./SingleUser"
import AddNewUser from "./AddNewUser"
import SearchUser from "./SearchUser"


const UsersList = () => {
    const [users,setUsers]= useState([])
    const [allusers, setAllUsers]= useState([])
    const fetchUsers = async ()=>{
        const {data}= await axios.get("http://localhost:4000/api/users/")
        if(data)
            setUsers(data.sort((a,b)=>a._id-b._id))
            setAllUsers(data.sort((a,b)=>a._id-b._id))
    }
    useEffect(()=>{
        fetchUsers()
    },[])
  return (
    <>
        <SearchUser setUsers={setUsers} allusers={allusers}/>
        <AddNewUser fetchUsers={fetchUsers} />
        {users.map(user=>{
            return <div>
                <SingleUser user={user} fetchUsers={fetchUsers}/>
            </div>
        })}
    </>
  )
}

export default UsersList
