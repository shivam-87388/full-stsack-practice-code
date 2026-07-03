import express from "express";
import todo from "../models/todo.js"

const todorouter = express();

todorouter.get("/todo",(req,res)=>{
    res.send("sucessfull sned result");
})