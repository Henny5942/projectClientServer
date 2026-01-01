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
import Checkbox from '@mui/material/Checkbox';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function CustomizedDialogs({fetchTasks}) {
  const [open, setOpen] = React.useState(false);

  const [title,setTitle]=useState("")
  const [tags,setTags]=useState("")
  const [completed,setCompleted]= useState(false)


  const handleSubmit = async (e)=>{
    e.preventDefault()
    const arrTags=tags.split(',').map(t=>t.trim())
    const {data}=await axios.post("http://localhost:4000/api/tasks",{title,tags:arrTags,completed})
    if(!data)
        alert("error")
    setTitle("")
    setTags("")
    setCompleted(false)
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
      <Button variant="outlined" onClick={handleClickOpen}>
        add new task
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          What is your task?
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
                <TextField onChange={(e)=>{setTags(e.target.value)}} value={tags} 
                fullWidth label="Tags (enter the tags with ',' between them)" 
                sx={(theme)=>({margin:"20px 0"})}/>
                <label for="completed">completed</label>
                <Checkbox onChange={(e)=>{setCompleted(!completed)}} value={completed} name='completed'/>
            
        </DialogContent>
        <DialogActions>
            <Button type='submit' autoFocus >
                add task
            </Button>
        </DialogActions>
        </form>
      </BootstrapDialog>
    </React.Fragment>
  );
}