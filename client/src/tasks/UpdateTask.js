import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { MdCreate } from "react-icons/md";

import axios from 'axios';
import { useState } from 'react';

import TextField from '@mui/material/TextField';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function CustomizedDialogs({task, fetchTasks}) {
  const [open, setOpen] = React.useState(false);

  const [title,setTitle]=useState(task.title)
  const [tags,setTags]=useState(task.tags.join(","))
 


  const handleSubmit = async (e)=>{
    e.preventDefault()
    const arrTags=tags.split(',').map(t=>t.trim())
    const {data}=await axios.put("http://localhost:4000/api/tasks",{id:task._id ,title,tags:arrTags})
    if(!data)
        alert("not update")
    fetchTasks()
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
      <Button sx={{ m: 1, p: 0.5 }} variant="outlined" onClick={handleClickOpen}>
        <MdCreate />
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Change your task
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
            
                <TextField onChange={(e)=>{setTitle(e.target.value)}} value={title}  label="title" variant="outlined" required/>
                <TextField onChange={(e)=>{setTags(e.target.value)}} value={tags} 
                fullWidth label="Tags (enter the tags with ',' between them)" 
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