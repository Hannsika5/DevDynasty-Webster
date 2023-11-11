import express from 'express';
import {getAllBlogs} from "../controllers/Blog-controller.js";
const blogRouter=express.Router();

blogRouter.get("/",getAllBlogs);

export default blogRouter;