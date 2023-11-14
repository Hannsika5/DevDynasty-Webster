import React from 'react';
import './App.css';
import Header from "./components/Blogpage/Header";
import Blogs from './components/Blogpage/Blogs';
import Login from './components/Blogpage/Account/Login';
import { Routes,Route } from 'react-router-dom';
import Addblog from './components/Blogpage/Addblog';
import UserBlogs from './components/Blogpage/UserBlogs';
import Blogdetails from './components/Blogpage/Blogdetails';
import { useSelector } from 'react-redux';
function App() {
  //const isLoggedIn=useSelector((state)=> state.isLoggedIn );
  //console.log(isLoggedIn);
  return( <React.Fragment>
<header><Header/></header>
<main>
  <Routes>
    <Route path ="/Login" element={<Login/>}/>
     <Route path ="/blogs" element={<Blogs/>}/> 
    <Route path ="/myBlogs" element={<UserBlogs/>}/>
    <Route path ="/myBlogs/:id" element={<Blogdetails/>}/> 
    <Route path ="/myBlogs/add" element={<Addblog/>}/>

  </Routes>

   {/* <div className="App">
    <Login/>
   </div>  */}
  </main>
</React.Fragment>
  )   
}


export default App;
