const express = require('express');
const user = require("../models/user")
const router = express.Router();

//get method
router.get("/", async(req,res)=>{
    try {
        const users = user.find();
        res.send(200).json({
            data: users,
        })
    } catch (error) {
        res.send(500),json({
            mesage: error.message
        })   
    }

});

//post method
router.post("/add",(req,res)=>{
    

})