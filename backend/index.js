import express from "express";
import dotenv from "dotenv";
import connect_db from "./config/connection.js";
import moduleName from "../router/todoRouter";


dotenv.config();
const app =  express();
const port = process.env.PORT || 5000;
connect_db();


app.listen(port,()=>{
  console.log(`server connected ${port}`);
});