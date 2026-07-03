import express from "express";
import todo from "../models/todo.js"

const todorouter = express.Router();
 //get method
todorouter.get("/getall",(req,res)=>{
    res.send("sucessfull all todo result");
});

//post method
todorouter.post("/add",(req,res)=>{
    console.log(req.body)
    res.send({Message:"add todo",data:req.body})
});

export default todorouter;