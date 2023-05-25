const express=require('express')
const AuthModel=require('../Models/authorModel')
const BlogModel=require('../Models/blogsModel')

//create
const createAuthor=async (req,res)=>{
     let author=req.body
     let create= await AuthModel.create(author)
     res.status(201).send({status:true,message:create})
}
module.exports={createAuthor}