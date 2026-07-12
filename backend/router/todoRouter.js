import express, { json } from "express";
import todo from "../models/todo.js"

const todorouter = express.Router();
 //get method
todorouter.get("/getall",async(req,res)=>{
try{
const todos = await todo.find();
res.send

}
catch{

}
    
   
});

//post method
todorouter.post("/add",(req,res)=>{
    console.log(req.body)
    res.send({Message:"add todo",data:req.body})
});
todorouter.delete("/delete",(req,res)=>{
    res.send(res)
})

export default todorouter;