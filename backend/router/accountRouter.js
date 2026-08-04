const express = require('express');
const user = require("../models/account")
const router = express.Router();
const bcrypt = require('bcrypt');

// login account
router.post('/login', async(req, res) => {
 try {
    const hassedPasswrod = await bcrypt.compareSync(req.body.password,10);
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

//create account
router.post("/create-account", async(req,res)=>{
    
    try {
        
        const existingUser = await user.findOne({email: req.body.email})
        if (existingUser) 
        {
        return res.status(400).json({ message: "Email already registered" });
        }
        const hassedPasswrod =  await bcrypt.hash(req.body.password, 10);
        const createAccount = await user.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: hassedPasswrod
    });
        res.status(200).json({
            message: "account successfully created",
            data: createAccount,
        });
        
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
        
    }


})

module.exports = router;