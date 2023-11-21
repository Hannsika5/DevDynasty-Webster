import { Box, InputLabel,Typography, TextField, Button } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'

const Addblog = () => {
  
    const[inputs,setInputs]=useState({
      title:"",
      description:"",
      imageURL:""
    });
    const handleChange=(e)=>{
      setInputs((prevState)=>({
        ...prevState,
        [e.target.name]:e.target.value,
      }));
    }
    const sendRequest= async()=>{
      const res = await axios.post("http://localhost:6500/api/blog/add",{
        title:inputs.title,
        description:inputs.description,
        image:inputs.imageURL,
        user:localStorage.getItem("userId")
      }).catch(err=>console.log(err));
      const data =  await res.data;
      return data;
    };
    const handleSubmit=(e)=>{
      e.preventDefault();
      console.log(inputs);
      sendRequest().then((data)=>console.log(data))
    }

  
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <Box border={3} borderColor="black" boxShadow =" 15px 10px 10px" padding={4} margin={'auto'} marginTop={4}
      display="flex" flexDirection='column' width={"80%"}>
        <Typography color={'brown'} textAlign={'center'} variant='h2' fontWeight={'bold'} padding={2} margin={3}> Create your blog  </Typography>
        <InputLabel sx={{mb:1,mt:2,fontsize:'24px',fontweight:"bold"}}>Title</InputLabel>
        <TextField  name= "title" value={inputs.title} onChange={handleChange} margin='auto' variant='outlined'/>
          <InputLabel sx={{mb:1,mt:2,fontsize:'24px',fontweight:"bold"}}>Description</InputLabel>
        <TextField name="description" value={inputs.description} onChange={handleChange} margin='auto' variant='outlined'/>
        <InputLabel sx={{mb:1,mt:2,fontsize:'24px',fontweight:"bold"}} >
          ImageURL
        </InputLabel>
        <TextField name="imageURL" value ={inputs.imageURL} onChange={ handleChange} margin='auto' variant='outlined'/>
         <Button type="submit" variant='contained' sx={{mt:2,background:"black",borderRadius:3 }}> Save</Button>
       
      </Box>
      </form>
    </div>
  )
}

export default Addblog;