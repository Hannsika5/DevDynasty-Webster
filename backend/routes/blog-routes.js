import express from 'express';
import {getById,updateBlog, addBlog,getAllBlogs } from '../controllers/blog-controller.js';

const blogRouter=express.Router();

blogRouter.get("/",getAllBlogs);
blogRouter.post("/add",addBlog);
blogRouter.post("/update/:id",updateBlog);
blogRouter.post("/:id",getById);
export default blogRouter;
