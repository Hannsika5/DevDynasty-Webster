import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import axios from "axios";
import { useDispatch } from 'react-redux';
import { authActions } from '../../../store';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispath=useDispatch();
  const navigate=useNavigate();
const [inputs, setInputs]=useState({

  name:"",
  email:"",
  password:"",
})
const [isSignup,setIsSignup]=useState(false)
const handleChange=(e)=>{
  setInputs((prevState)=>({...prevState,[e.target.name]: e.target.value,}))
}
const sendRequest=async(type='login')=>{
  const res= await axios.post(`http://localhost:6500/api/user/${type}`,{
    name:inputs.name,
    email:inputs.email,
    password:inputs.password
  })
  .catch(err=>console.log(err));
  const data = await res.data;
  return data;
  
  
}
const handleSubmit = (e)=>{
  e.preventDefault()
  console.log(inputs);
  if(isSignup){
  sendRequest("signup").then(()=>dispath(authActions.login())).then(()=>navigate("/Blogs"));  
}
else{
sendRequest().then(()=>dispath(authActions.login())).then(()=>navigate("/Blogs"));
}

}

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          maxWidth={400}
          display="flex"
          flexDirection={"column"}
          alignItems="center"
          justifyContent={"center"}
          boxShadow="7px 7px 10px #000"
          padding={2}
          margin="auto"
          marginTop={5}
          borderRadius={5}
        >
          <Typography variant="h2" padding={3} textAlign="center">
            {isSignup ? "Signup" : "Login"}
          </Typography>
          {isSignup && (
            <TextField
              name="name"
              label="Enter Name"
              onChange={handleChange}
              value={inputs.name}
              placeholder="Name"
              margin="normal"
            />
          )}{" "}
          <TextField
            name="email"
            label="Enter Email"
            onChange={handleChange}
            value={inputs.email}
            type={"email"}
            placeholder="Email"
            margin="normal"
          />
          <TextField
            name="password"
            label="Enter Password"
            onChange={handleChange}
            value={inputs.password}
            type={"password"}
            placeholder="Password"
            margin="normal"
          />
          <Button
            type="submit"
            Width={400}
            variant="contained"
            sx={{ borderRadius: 3, marginTop: 3,marginBottom:1 }}
            color="warning"
          >
            Submit
          </Button>
          <Typography>OR</Typography>
          <Button
            onClick={() => setIsSignup(!isSignup)}
            variant='outlined'
            sx={{ borderRadius: 3,marginTop:1}}
          >
           {isSignup ? "Login" : "Signup"}
          </Button>
        </Box>
      </form>
    </div>
  );

};

export default Login;
