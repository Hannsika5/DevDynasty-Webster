
import React, { useState } from 'react';
import {TextField,Button,Box,styled, Typography} from '@mui/material';

import { useDispatch } from "react-redux";
import { authActions } from '../../../store';
import { useNavigate } from "react-router-dom";

  
  const Login = () => {
   
  const naviagte = useNavigate();
  const dispath = useDispatch();
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [isSignup, setIsSignup] = useState(false);
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.username]: e.target.value,
    }));
  };
  

    

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
   
  };
  

  return (
    <div>
      <form on>
        <Box
          maxWidth={400}
          display="flex"
          flexDirection={"column"}
          alignItems="center"
          justifyContent={"center"}
          boxShadow="10px 10px 20px #000"
          padding={3}
          margin="auto"
          marginTop={5}
          borderRadius={5}
        >
          <Typography variant="h2" padding={3} textAlign="center">
            {isSignup ? "Signup" : "Login"}
          </Typography>
          {isSignup &&(
            <TextField
              name="username"
              label="Enter Username"
              onChange={handleChange}
              value={inputs.username}
              placeholder="UserName"
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
            sx={{ borderRadius: 3, marginTop: 3 }}
            color="warning"
          >
            Login
          </Button>
          <Button
            onClick={() => setIsSignup(!isSignup)}
            variant='outlined'
            sx={{ borderRadius: 3, marginTop: 3 }}
          >
            {isSignup ? "Login" : "Signup"}
          </Button>
        </Box>
      </form>
    </div>
  );
    
};

export default Login;
