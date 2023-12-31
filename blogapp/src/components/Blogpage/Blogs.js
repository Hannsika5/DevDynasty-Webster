import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material';
import axios from 'axios';
import Blog from './Blog';
import {userSearchParams,Link} from 'react-router-dom';

const Blogs = () => {
  const [blogs,setBlogs] = useState();
  const sendRequest= async()=>{
    const res = await axios.get("http://localhost:6500/api/blog").catch(err=>console.log(err));
    const data= await res.data;
    return data;
  } 
  useEffect(()=>{
    sendRequest().then(data=>setBlogs(data.blogs));
    },[]);
  
  return (
    <div>
    <Box  display={'flex' }  flexDirection={'column'}>
    {blogs && blogs.map((blog,index)=>(
      <Blog
      id={blog._id} 
      isUser={localStorage.getItem("userId") === blog.user._id}
     title={blog.title}
     description={blog.description} 
     imageURL={blog.image} 
    user={blog.user}
   userName={blog.user.name}/>))}
   </Box>
   </div>
  );
};

export default Blogs;