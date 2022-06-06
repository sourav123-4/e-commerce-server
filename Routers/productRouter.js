const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const reactProduct = require("../models/productModel");

router.post("/addproducts",async(req,res)=>{
    console.log(req.body)
    const {title,price,description,category,image} =req.body
    reactProduct.findOne({title : title},(err,product) =>{
        if(product){
            res.send({message:"product already registered"})
        }else{
            const product = new reactProduct({
                title,price,description,category,image
            })
            product.save().then(()=>{
                res.send(product)
            }).catch((e)=>{
                res.send(e)
            })
        }
    })
})

router.get("/addproducts",(req,res)=>{
    reactProduct.find().then((result)=>{
        console.log(result)
        res.send(result)
    }).catch((err)=>{
        console.log(err)
    })
})

router.get("/addproducts/:category",(req,res)=>{
    reactProduct.find({category:req.params.category}).then((result)=>{
        console.log(result)
        res.send(result)
    }).catch((err)=>{
        console.log(err)
    })
})

router.get("/addproducts/products/:id",(req,res)=>{
    reactProduct.findById({_id:req.params.id}).then((result)=>{
        console.log(result)
        res.send(result)
    }).catch((err)=>{
        console.log(err)
    })
})
module.exports = router;
