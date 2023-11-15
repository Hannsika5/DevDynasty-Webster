import React from 'react'
import { Typography,CardContent,CardMedia,CardHeader,Collapse,Avatar,Card } from '@mui/material'
const Blog = () => {
  return (
    <div>blogs
    {" "}
    <Card sx={{ width:"40%",margin:'auto',mt :2,padding:3,boxShadow:"5px 7px 5px #000",":hover":{boxShadow:"10px 10px 20px #000 "}}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
            R
          </Avatar>
        }
        
        title="My first blog"
        subheader="November  14, 2023"
      />
      <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt=""
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Description
 </Typography>
        </CardContent>
      
    </Card></div>
  )
}

export default Blog