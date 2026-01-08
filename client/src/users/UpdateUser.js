import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import { useState } from 'react';
import { MdCreate } from "react-icons/md";
import TextField from '@mui/material/TextField';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function CustomizedDialogs({user,fetchUsers}) {
  const [open, setOpen] = React.useState(false);

  const [values,setValues]=useState({
    name:user.name,
    username:user.username,
    email:user.email,
    address:user.address || {
                city: "",
                street: "",
                building: 0
            },
    phone:user.phone
    })
 

  const handleSubmit = async (e)=>{
    e.preventDefault()
    const {data}=await axios.put("http://localhost:4000/api/users",
        {   
            id:user._id ,
            name:values.name,
            username:values.username,
            email:values.email, 
            address: values.address, 
            phone:values.phone
        })
    if(!data)
        alert("error")
    fetchUsers()
    handleClose()
  }

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <IconButton
        onClick={handleClickOpen}
        sx={{
          backgroundColor: '#1976d2',
          color: 'white',
          '&:hover': {
            backgroundColor: '#115293',
            transform: 'scale(1.1)',
          },
          transition: 'all 0.2s ease-in-out',
        }}
      >
        <MdCreate />
      </IconButton>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Update the user
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <form onSubmit={handleSubmit}>
        <DialogContent sx={(theme)=>({display:'flex',flexDirection:"column",gap:2})} dividers >
            
                <TextField onChange={(e)=>{setValues({...values,name:e.target.value})}} value={values.name}  label="Name" variant="outlined" required/>
                <TextField onChange={(e)=>{setValues({...values,username:e.target.value})}} value={values.username}  label="Username" variant="outlined" required/>
                <TextField onChange={(e)=>{setValues({...values,email:e.target.value})}} value={values.email}  label="Email" type='email' variant="outlined" />
                <TextField onChange={(e)=>{setValues({...values,phone:e.target.value})}} value={values.phone} type="number"  label="Phone" />
                <label>address:</label>
                <TextField onChange={(e)=>{setValues({...values,address:{...values.address,city:e.target.value}})}} value={values.address.city}  label="city" variant="standard"/>
                <TextField onChange={(e)=>{setValues({...values,address:{...values.address,street:e.target.value}})}} value={values.address.street}  label="street" variant="standard"/>
                <TextField onChange={(e)=>{setValues({...values,address:{...values.address,building:Number(e.target.value)}})}} value={values.address.building!==0?values.address.building:""} type="number" inputProps={{ min: 1, max: 999 }} label="building" variant="standard"/>
                
              
            
        </DialogContent>
        <DialogActions>
            <Button type='submit' autoFocus >
                save
            </Button>
        </DialogActions>
        </form>
      </BootstrapDialog>
    </React.Fragment>
  );
}