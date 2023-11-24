import React from 'react'
import { Typography,CardContent,CardMedia,Box,CardHeader,Avatar,Card, IconButton } from '@mui/material'
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ClassNames } from '@emotion/react';
const Blog = ({title,description,imageURL,userName,isUser,id}) => {
  const navigate = useNavigate();
  const handleEdit = ()=>{
    navigate(`/myBlogs/${id}`);
  };
  const deleteRequest = async()=>{
    const res= await axios.delete(`http://localhost:6500/api/blog/${id}`).catch(err=>console.log(err));
    const data= await res.data;
    return data;

  }
  const handleDelete=()=>{
   deleteRequest().
   then(()=> navigate("/"))
   .then(()=> navigate("/blogs"));
  };

  return (
    <div>
    {" "}
    <Card sx={{ width:"40%",margin:'auto',mt :2,padding:3,boxShadow:"5px 7px 5px #000",":hover":{boxShadow:"10px 10px 20px #000 "}}}>
     {isUser && (
     <Box display='flex'>
      <IconButton onClick = {handleEdit} sx={{marginLeft:'auto'}}> <ModeEditOutlineIcon color="warning"/></IconButton>
      <IconButton onClick ={ handleDelete}> <DeleteIcon color="error" /></IconButton>
      
     </Box>
     )}
     
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
            {userName}
          </Avatar>
        }
        
        title={title}
        
      />
      <CardMedia
        component="img"
        height="194"
        image={imageURL}
        alt="loading"
      />
      <CardContent>
      <hr />
      <br />
        <Typography
        className={ClassNames.font}
         variant="body2" color="text.secondary">
          <b>{userName}</b>{":"}{description}
 </Typography>
        </CardContent>
      
    </Card></div>
  );
};

export default Blog;
