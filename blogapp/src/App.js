import React from 'react';
import './App.css';
import Header from "./components/Blogpage/Header";
import Footer  from "./components/Blogpage/Footer";
import Blogs from './components/Blogpage/Blogs';
import Login from './components/Blogpage/Account/Login';
import { Routes,Route } from 'react-router-dom';
import Addblog from './components/Blogpage/Addblog';
import UserBlogs from './components/Blogpage/UserBlogs';
import DetailView from './components/Blogpage/DetailView';
import BlogDetail from './components/Blogpage/BlogDetail';
import { useSelector } from 'react-redux';
function App() {
  const isLoggedIn=useSelector((state)=> state.isLoggedIn );
  console.log(isLoggedIn);
  return( <React.Fragment>
<header><Header/></header>
<main>
  <Routes>
    <Route path ="/Login" element={<Login/>}/>
     <Route path ="/blogs" element={<Blogs/>}/> 
    <Route path ="/myBlogs" element={<UserBlogs/>}/>
    <Route path ="/myBlogs/:id" element={<BlogDetail/>}/> 
    <Route path ="/myBlogs/add" element={<Addblog/>}/>
    <Route path ="/details/:id" element={<DetailView/>}/>

  </Routes>

   {/* <div className="App">
    <Login/>
   </div>  */}
  </main>
  <footer><Footer/></footer>
</React.Fragment>
  )   
}


export default App;
