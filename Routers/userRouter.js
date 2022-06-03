const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const reactUser = require("../models/userModel");

router.post("/register",async(req,res)=>{
    console.log(req.body)
    const {firstname,lastname,email,password,confirmpassword} =req.body
    reactUser.findOne({email : email},(err,user) =>{
        if(user){
            res.send({message:"user already registered"})
        }else{
            const user1 = new reactUser({
                firstname,lastname,email,password,confirmpassword
            })
            user1.save().then(()=>{
                res.send(user)
            }).catch((e)=>{
                res.send(e)
            })
        }
    })
})

router.get("/register",(req,res)=>{
    reactUser.find().then((result)=>{
        console.log(result)
        res.send(result)
    }).catch((err)=>{
        console.log(err)
    })
})

module.exports = router;
