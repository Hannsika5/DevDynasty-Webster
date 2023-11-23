import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Blog from './Blog';
import { addElipsis } from '../../utils/common-utils';
const UserBlogs = () => {
  const [user,setUser]=useState();
  const id = localStorage.getItem("userId");
  const sendRequest = async ()=>{
    const res = await axios.get(`http://localhost:6500/api/blog/user/${id}`).catch(err=>console.log(err));
    const data= await res.data;
    return data;
  };
  useEffect(()=>{
    sendRequest().then(data=>setUser(data.user));},[]);
  console.log(user);
  return (
    <div>{user &&  user.blogs && user.blogs.map((blog,index)=>(
      <Blog  
      id={blog._id}
      key={index}
      isUser={true}
      title={blog.title}
      description={addElipsis(blog.description,100)}  
      imageURL={blog.image} 
     userName={user.name}/>))}</div>
  )
};

export default UserBlogs;