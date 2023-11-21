
import React, { useState } from 'react'
import {AppBar, Button, Toolbar,Box,Typography,Tab, Tabs} from '@mui/material'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'react-redux';
import { authActions } from '../../store';
const Header = () => {
  const dispath = useDispatch();
    const[value,setValue] = useState();
    const isLoggedIn=useSelector((state)=> state.isLoggedIn );
  return (
    <AppBar position= "sticky "sx={{background:'black'}}>
        <Toolbar>
            <Typography
            variant="h4"> BlogApp</Typography>
           {isLoggedIn &&<Box display="flex" marginLeft ="auto" marginRight="auto">
            <Tabs  textColor = "inherit"value={value} onChange={(e,val)=>setValue(val)} > 
            <Tab LinkComponent={Link} to ="/blogs" label="All Blogs "/>
            <Tab LinkComponent={Link} to = "/myBlogs" label="My Blogs"/>
            <Tab LinkComponent={Link} to = "/myBlogs/add" label="Create "/>
             </Tabs>
            </Box>}
            <Box display="flex" marginLeft ="auto">
            {!isLoggedIn && <>   <Button LinkComponent={Link} to ="/Login" variant='contained' sx={{margin:1,borderRadius:10}}color ="warning">Login</Button>
                <Button LinkComponent={Link} to = "/Login" variant='contained' sx={{margin:1,borderRadius:10}}color ="warning">Signup</Button></>}
                {isLoggedIn &&<Button onClick={()=>dispath(authActions.logout())} LinkComponent={Link} to ="/Login" variant='contained' sx={{margin:1,borderRadius:10}}color="warning">Logout</Button>} 
            </Box>
        </Toolbar>
    </AppBar>

)
  }

export default Header