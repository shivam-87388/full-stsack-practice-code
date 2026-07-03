import express from "express";
import dotenv from "dotenv";
import connect_db from "./config/connection.js";
import todoRouter from "./router/todoRouter.js";
//import userRouter from "./router/userRouter.js";
import cors from 'cors'


dotenv.config();
connect_db();
const app =  express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/todo",todoRouter);

app.listen(PORT,()=>{
  console.log(`server connected ${PORT}`);
});