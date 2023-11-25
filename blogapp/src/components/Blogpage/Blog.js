import React from 'react'
import { Typography,CardContent,CardMedia,Box,CardHeader,Avatar,Card, IconButton } from '@mui/material'
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
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
   deleteRequest().then(data=>console.log(data));
  }
  console.log(title,isUser);
  return (
    <div>
    {" "}
    <Card sx={{ width:"60%",margin:"auto",mt :2,padding:3,boxShadow:"5px 7px 5px #000",":hover":{boxShadow:"10px 10px 20px #000 "}}}>
     {isUser && (
     <Box display='flex'>
      <IconButton onClick = {handleEdit} sx={{marginLeft:'auto'}}> <ModeEditOutlineIcon/></IconButton>
      <IconButton onClick ={ handleDelete}> <DeleteIcon/></IconButton>
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
        height="300"
        image={imageURL}
        alt=""
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <b>{userName}</b>{":"}{description}
 </Typography>
        </CardContent>
      
    </Card></div>
  )
}

export default Blog