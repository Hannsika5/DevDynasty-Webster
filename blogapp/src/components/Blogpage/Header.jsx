
import React, { useState } from 'react'
import {AppBar, Button, Toolbar,Box,Typography,Tab, Tabs} from '@mui/material'
import { Link } from 'react-router-dom';
const Header = () => {
    const[value,setValue] = useState();
  return (
    <AppBar position='sticky' sx={{background:'black'}}>
        <Toolbar>
            <Typography
            variant="h4"> BlogApp</Typography>
            <Box display="flex" marginLeft ="auto" marginRight="auto">
            <Tabs  textColor = "inherit"value={value} onChange={(e,val)=>setValue(val)} > 
            <Tab LinkComponent={Link} to ="/blogs"label="All Blogs "/>
            <Tab LinkComponent={Link} to = "/UserBlogs" label="My Blogs"/>
             </Tabs>
            </Box>
            <Box display="flex" marginLeft ="auto">
                <Button LinkComponent={Link} to ="/Login" variant='contained' sx={{margin:1,borderRadius:10}}color ="warning">Login</Button>
                <Button LinkComponent={Link} to = "/Login" variant='contained' sx={{margin:1,borderRadius:10}}color ="warning">Signup</Button>
            </Box>
        </Toolbar>
    </AppBar>

)
  }

export default Header