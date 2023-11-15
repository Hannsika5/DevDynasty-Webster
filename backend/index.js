import express from 'express';
import mongoose from 'mongoose';
import router from "./routes/user-routes.js";
import blogRouter from "./routes/blog-routes.js";
import cors from "cors";
const app=express();
app.use(cors());
app.use(express.json());
app.use("/api/user",router);
app.use("/api/blog",blogRouter);



mongoose.connect('mongodb+srv://ravulahannsika:Aishu3568@cluster0.uukkuj0.mongodb.net/?retryWrites=true&w=majority')
    .then(()=>{
        console.log("database connected");
    });


app.listen(6500,()=>{
    console.log("server started");
});

//f1y7OhsU9t5vOXsA