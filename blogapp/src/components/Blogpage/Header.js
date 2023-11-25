
import React, { useState } from 'react'
import {AppBar, Button, Toolbar,Box,Typography,Tab, Tabs} from '@mui/material'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'react-redux';
import { authActions } from '../../store';
import { blue } from '@mui/material/colors';
const Header = () => {
  const dispath = useDispatch();
    const[value,setValue] = useState();
    const isLoggedIn=useSelector((state)=> state.isLoggedIn );
  return (
    <AppBar position= "sticky "sx={{background:" linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(97,9,121,1) 35%, rgba(0,212,255,1) 100%)"}}>
        <Toolbar>
            <Typography
            variant="h4"> BlogApp</Typography>
           {isLoggedIn &&<Box display="flex" marginLeft ="auto" marginRight="auto">
            <Tabs  textColor = "inherit"value={value} onChange={(e,val)=>setValue(val)} > 
            
            <Tab LinkComponent={Link} to ="/blogs" label="All Blogs "/>
            <Tab LinkComponent={Link} to = "/myBlogs" label="My Blogs"/>
            <Tab LinkComponent={Link} to = "/myBlogs/add" label="Create "/>
            <Tab LinkComponent={Link} to ="/" label="About"/>
            <Tab LinkComponent={Link} to ="/" label="Contact Us"/>

             </Tabs>
             
            
            </Box>}
            <Box display="flex" marginLeft ="auto">
            {!isLoggedIn && <>   <Button LinkComponent={Link} to ="/Login" variant='contained' sx={{margin:1,borderRadius:10}}color ="secondary">Login</Button>
                <Button LinkComponent={Link} to = "/Login" variant='contained' sx={{margin:1,borderRadius:10}}color ="primary">Signup</Button></>}
                {isLoggedIn &&<Button onClick={()=>dispath(authActions.logout())} LinkComponent={Link} to ="/Login" variant='contained' sx={{margin:1,borderRadius:10}}color="primary">Logout</Button>} 
            </Box>
        </Toolbar>
    </AppBar>

)
  }

export default Header