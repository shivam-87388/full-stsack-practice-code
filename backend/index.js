import express from "express";
import dotenv from "dotenv";
import connect_db from "./config/connection.js";
import todoRouter from "../router/todoRouter";
import userRouter from "../router/userRouter";
import cors from 'cors'


dotenv.config();
connect_db();
const app =  express();
const PORT = process.env.PORT || 5000;

app.use

app.listen(port,()=>{
  console.log(`server connected ${PORT}`);
});