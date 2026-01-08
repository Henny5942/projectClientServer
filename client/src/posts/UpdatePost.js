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

export default function CustomizedDialogs({post,fetchPosts}) {
  const [open, setOpen] = React.useState(false);

  const [title,setTitle]=useState(post.title)
  const [body,setBody]=useState(post.body)


  const handleSubmit = async (e)=>{
    e.preventDefault()
    const {data}=await axios.put("http://localhost:4000/api/posts",{id:post._id,title,body})
    if(!data)
        alert("not update")
    fetchPosts()
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
          Update the post
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
        <DialogContent dividers >
            
                <TextField onChange={(e)=>{setTitle(e.target.value)}} value={title}  label="Title" variant="outlined" required/>
                <TextField onChange={(e)=>{setBody(e.target.value)}} value={body} 
                fullWidth label="Body" 
                sx={(theme)=>({margin:"20px 0"})}/>
            
            
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