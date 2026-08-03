const express = require('express');
const user = require("../models/account")
const router = express.Router();

//get method
router.post('/login', async(req, res) => {
 try {
    const loginuser = await user.findOne({email: req.body.email})
    if (!loginuser=== null) {
        return res.status(400).json({
            message: "user does not exist"
        })
        if (req.body.password !== loginuser.password) {
           return res.status(400).json({
            message: "password is wrong"
        }) 
        }
        res.status(200).json({message: "login successful"})
    }
 } catch (error) {
    res.status(500).json({
        message: "error.message"
    })
    
 }
})

//post method
router.post("/create-account", async(req,res)=>{
    try {
        const existingUser = await user.findOne({email: req.body.email})
        if (existingUser) 
        {
        return res.status(400).json({ message: "Email already registered" });
        }
        const createaccount = await user.create(req.body);
        res.status(200).json({
            message: "account successfully created",
            data: createaccount
        });
        
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
        
    }


})

module.exports = router;