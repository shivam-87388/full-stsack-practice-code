const express = require('express');
const user = require("../models/account")
const router = express.Router();

//get method
router.get("/login", async(req,res)=>{
    try {
        const users = user.find();
        res.status(200).json({
            data: users,
        })
    } catch (error) {
        res.status(500),json({
            mesage: error.message
        })   
    }

});

//post method
router.post("/create-account", async(req,res)=>{
    try {
        const existuser = await user.findOne({email: req.body.email})
        const createaccount = await user.create(req.body);
        res.status(200).json({
            message: "account successfully created",
            data: createaccount
        });
        
    } catch (error) {
        res.status(500).json({
            message: error.mesage
        });
        
    }


})

module.exports = router;