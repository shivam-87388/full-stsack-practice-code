const express = require("express");
const user = require("../models/account");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// login account
router.post("/login", async (req, res) => {
    try {
        const findUser = await user.findOne({ email: req.body.email });
        if (findUser != null) {
            const hassedPassword = await bcrypt.compare(
                req.body.password,
                findUser.password,
            );
            if (hassedPassword == true) {
                const payload = {
                    id: findUser._id,
                    email: findUser.email,
                };
                const token = jwt.sign(payload, process.env.JWT_SECRET);

                res.status(200).json({
                    message: "login sucessfull",
                    token: token,
                });
            } else {
                res.status(404).json({
                    message: "password wrong",
                });
            }
        } else {
            res.status(404).json({
                message: "user does not exist",
            });
        }
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
});

//create account
router.post("/create-account", async (req, res) => {
    try {
        const existingUser = await user.findOne({ email: req.body.email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already registered" });
        }
        const hassedPasswrod = await bcrypt.hash(req.body.password, 10);
        const createAccount = await user.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: hassedPasswrod,
        });
        res.status(200).json({
            message: "account successfully created",
            data: createAccount,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
});

//update passwrod
router.patch("/update/:id", async (req, res) => {
    try {
        const hassedPassword = await bcrypt.hash(req.body.password, 10);
        const updateUser = await user.findByIdAndUpdate(req.params.id, {
            password: hassedPassword,
        });
        if (updateUser !== null) {
            res.status(200).json({ mesasge: "passwrod changed successfully"
             });
    
        } else {
            res.status(404).json({ mesasge: "user does not exist" });
        }
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
});

module.exports = router;
