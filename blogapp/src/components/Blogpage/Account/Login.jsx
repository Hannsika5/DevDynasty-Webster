
import React, { useState } from 'react';
import {TextField,Button,Box,styled} from '@mui/material';
import { palette } from '@mui/material';



const Component = styled(Box)`
    
    width: 300px;
    
    margin: auto;
    padding: 20px;
    box-shadow: 10px 2px 10px 2px rgb(0 0 1/0.6) ;
    
`;
const Wrapper = styled(Box)`
    padding: 25px 30px;
    display: flex;
    flex: 1;
    flex direction : column;
    overflow: auto;
    & >div,&>button, & >p{
        margin-top: 30px;
    }
`;
const LoginButton = styled(Button)`
    text-transform: none;
    
    color: #fff;
    width: 200px;
    border-radius: 2px;
`;

const SignupButton = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    width:200px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;


function Login() {
  const [username, setUsername] = useState('');
  const [email, setEmail]= useState('');
  const [password, setPassword] = useState('');
  
  const handleLogin = () => {
    // Add your authentication logic here.
    
    if (username === 'yourUsername' && password === 'yourPassword') {
      alert('Login successful!');
    } else {
      alert('Login failed. Please check your credentials.');
    }
  };
  

  return (
    <Component sx={{ bgcolor: 'text.disabled' }}  >
    <box >
      
      <h2 >Login</h2> 
      <Wrapper>
      <form>
        <TextField sx={{ input: { color: 'white' } }} 
        
          label="Username"
          variant="standard"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Email"
          type="email"
          variant="standard"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          variant="standard"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
    
        <LoginButton
          variant="contained"
          onClick={handleLogin}
        >
          Login
        </LoginButton>
        <p>OR</p>
        <SignupButton
          variant="outlined"
        >
          Sign up
        </SignupButton>
        
      </form>
      </Wrapper>
    </box>
    </Component>
  );
}

export default Login;
