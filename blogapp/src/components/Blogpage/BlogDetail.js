import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, InputLabel,Typography, TextField, Button } from '@mui/material';
import axios from 'axios';

const BlogDetail = () => {
  const navigate =useNavigate();
  const[blog,setBlog]=useState();
  const id = useParams().id;
  console.log(id);
  const[inputs,setInputs]=useState({});
  const handleChange=(e)=>{
    setInputs((prevState)=>({
      ...prevState,
      [e.target.name]:e.target.value,
    }));
  }
  
  const fetchDetails= async()=>{
    const res = await axios.get(`http://localhost:6500/api/blog/${id}`)
    .catch(err=>console.log(err));
    const data = await res.data;
    return data;
  };
  
  useEffect(()=>{
    fetchDetails().then(data=>{
      setBlog(data.blog)
      setInputs({title:data.blog.title,
      description:data.blog.description,
      
    
    });
    });
    
  },[id]);
  const sendRequest=async()=>{
    const res = await axios.put(`http://localhost:6500/api/blog/update/${id}`,{
      title:inputs.title,
      description:inputs.description
    }).catch(err=>console.log(err));
    const data = await res.data;
    return data;

  };
  console.log(blog);
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(inputs);
    sendRequest().then(data=>console.log(data)).then(()=>navigate("/myBlogs/"));
    
  };
  return (
    <div>
    {inputs && 
      <form onSubmit={handleSubmit}>
      <Box border={3} borderColor="black" boxShadow =" 15px 10px 10px" padding={4} margin={'auto'} marginTop={4}
      display="flex" flexDirection='column' width={"80%"}>
        <Typography color={'brown'} textAlign={'center'} variant='h2' fontWeight={'bold'} padding={2} margin={3}> Update your blog  </Typography>
        <InputLabel sx={{mb:1,mt:2,fontsize:'24px',fontweight:"bold"}}>Title</InputLabel>
        <TextField  name= "title" value={inputs.title} onChange={handleChange} margin='auto' variant='outlined'/>
          <InputLabel sx={{mb:1,mt:2,fontsize:'24px',fontweight:"bold"}}>Description</InputLabel>
        <TextField name="description" value={inputs.description} onChange={handleChange} margin='auto' variant='outlined'/>
         <Button type="submit" variant='contained' sx={{mt:2,background:"black",borderRadius:3 }}> Save</Button>
       
      </Box>

      </form>
    }</div>
  )
}

export default BlogDetail;