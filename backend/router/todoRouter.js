import express, { json } from "express";
import todo from "../models/todo.js"
import e from "express";

const todorouter = express.Router();
 //get method
todorouter.get("/getall",async(req,res)=>{
try{
const todos = await todo.find();
res.status(200).json(todos);

}
catch (error) {res.send(500).json(error)}
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