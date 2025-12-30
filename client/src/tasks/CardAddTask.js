import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { MdOutlineAddCircle } from "react-icons/md";

import axios from "axios"
import { useState } from "react"
import {useNavigate} from "react-router-dom"



export default function FormDialog({fetchTasks}) {
    const navigate=useNavigate()
    const [title,setTitle]=useState("")
    const addTask = async (task)=>{
    const {data}=await axios.post("http://localhost:4000/api/tasks",{title: task})
    setTitle("")
    navigate("/tasks")
    fetchTasks()
  }


  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    await addTask(formJson.task)
    handleClose();
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        {/* <MdOutlineAddCircle /> */}
        add task
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create Todo</DialogTitle>
        <DialogContent>
          <DialogContentText>
            What is your task?
          </DialogContentText>
          <form onSubmit={handleSubmit} id="subscription-form">
            <TextField
              autoFocus
              required
              margin="dense"
              id="name"
              name="task"
              type="text"
              fullWidth
              variant="standard"
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button type="submit" form="subscription-form">
            save
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}