import express from "express";
import todo from "../models/todo.js"

const todorouter = express();
 //get method
todorouter.get("/todo",(req,res)=>{
    res.send("sucessfull sned result");
});

//post method
todorouter.post("/todo",(req,res)=>{
    res.send("sucessfull sned result");
});