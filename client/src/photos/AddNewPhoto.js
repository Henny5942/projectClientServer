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
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from "@mui/material";
import TextField from '@mui/material/TextField';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function CustomizedDialogs({fetchPhotos}) {
  const [open, setOpen] = React.useState(false);

  const [title,setTitle]=useState("")
  const [imageUrl,setImageUrl]=useState("")
  

  const handleSubmit = async (e)=>{
    e.preventDefault()
    const {data}=await axios.post("http://localhost:4000/api/photos",{title,imageUrl})
    if(!data)
        alert("error")
    setTitle("")
    setImageUrl("")
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
      <Button variant="outlined" onClick={handleClickOpen}>
        add new photo
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          new photo
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
          <FormControl fullWidth>
            <InputLabel>image</InputLabel>
            <Select 
              value={imageUrl}
              label="image"
              onChange={(e) => setImageUrl(e.target.value)}
              required
            >
              <MenuItem value="image1.jpg">image1</MenuItem>
              <MenuItem value="image2.jpg">image2</MenuItem>
              <MenuItem value="image3.jpg">image3</MenuItem>
              <MenuItem value="image4.jpg">image4</MenuItem>
              <MenuItem value="image5.jpg">image5</MenuItem>
              <MenuItem value="image6.jpg">image6</MenuItem>
              <MenuItem value="image7.jpg">image7</MenuItem>
              <MenuItem value="image8.jpg">image8</MenuItem>
              <MenuItem value="image9.jpg">image9</MenuItem>

            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
            <Button type='submit' autoFocus >
                add photo
            </Button>
        </DialogActions>
        </form>
      </BootstrapDialog>
    </React.Fragment>
  );
}