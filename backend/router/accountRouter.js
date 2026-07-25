const express = require('express');
const user = require("../models/account")
const router = express.Router();

//get method
router.get("/login", async(req,res)=>{
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
router.post("/create-account", async(req,res)=>{
    try {
        const createaccount = await user.create(req.body);
        res.send(200).json({
            message: "account successfully created",
            data: createaccount
        });
        
    } catch (error) {
        res.send(500).json({
            message: error.mesage
        });
        
    }


})

module.exports = router;