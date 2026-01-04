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
import TextField from '@mui/material/TextField';
import { MdCreate } from "react-icons/md";



const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function CustomizedDialogs({photo,fetchPhotos}) {
  const [open, setOpen] = React.useState(false);

  const [title,setTitle]=useState(photo.title)

  

  const handleSubmit = async (e)=>{
    e.preventDefault()
    const {data}=await axios.put("http://localhost:4000/api/photos",{id:photo._id,title,imageUrl:photo.imageUrl})
    if(!data)
        alert("error")
    fetchPhotos()
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
      <Button sx={{border:"none",backgroundColor:"darkgrey"}} variant="outlined" onClick={handleClickOpen}>
        <MdCreate />
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          update photo
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
        <DialogContent sx={{display:"flex", flexDirection:"column"}} dividers >
            
                <TextField onChange={(e)=>{setTitle(e.target.value)}} value={title}  label="Title" variant="outlined" sx={(theme)=>({marginBottom:"20px"})}/>
               
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