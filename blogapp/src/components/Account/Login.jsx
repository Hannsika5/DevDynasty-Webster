
//import {Box ,TextField,Button} from '@mui/material';




// const Login=()=>{
    
//         const imageURL = 'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';

//         return (
//         <Box>
//         <img src={imageURL} alt="Login"/>
//         <TextField variant="standard"/>
//         <TextField variant="standard"/>
//         <Button variant="contained">Login</Button>
//         <Button>Create a account </Button>
//         </Box>
//     )
// }


// Login.js
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Login() {
  const [username, setUsername] = useState('');
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
    <div>
      <h2>Login</h2>
      <form>
        <TextField
          label="Username"
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleLogin}
        >
          Login
        </Button>
      </form>
    </div>
  );
}

export default Login;
