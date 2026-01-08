import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from "@mui/material";
import { useState } from 'react';
const SearchUser = ({setUsers,allusers}) => {
    const [searchBy,setSearchBy] =useState("name")
  return (
    <div style={{display:"flex", gap:20, alignItems: "center"}}>
        <FormControl size='small'>
            <InputLabel>search by</InputLabel>
            <Select 
            defaultValue={"name"} 
              value={searchBy}
              label="search by"
              onChange={(e) => setSearchBy(e.target.value)}
              required
            >
              <MenuItem value="name">name</MenuItem>
              <MenuItem value="username">username</MenuItem>
              <MenuItem value="email">email</MenuItem>
              <MenuItem value="phone">phone</MenuItem>
            </Select>
        </FormControl>
        <TextField onChange={(e)=>{setUsers(allusers.filter(user=>user[searchBy].includes(e.target.value)))}}
            placeholder="...חיפוש"
            size="small"
            InputProps={{
                startAdornment: (
                <InputAdornment position="start">
                    <SearchIcon />
                </InputAdornment>
                ),
            }}
            sx={{margin:"20px 0"}}
        />
    </div>
  )
}

export default SearchUser

