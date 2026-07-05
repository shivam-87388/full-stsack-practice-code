import express from 'express';
import User from "../models/User.js"

const userrouter =  express();

//get method
userrouter.get("/user",(req,res)=>{
    res.send("successfully");
});


userrouter.get()

