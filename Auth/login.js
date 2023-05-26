const { comparePassword } =require("../brypt/hasshingPassword")
var jwt = require('jsonwebtoken');
const {Author_Model}=require("../Models/authorModel")

const login=async(req,res)=>{
    const {email,password}=req.body
    if(!email)return res.status(400).send({status:"false",message:"email needed"})
    if(!password)return res.status(400).send({status:"false",message:"password needed"})
    const user=await Author_Model.findOne({email})
    if(!user){res.status(400).send({status:"false",message:"email is not registered"})}
    const status=await comparePassword(password,user.password)
    if(!status){res.status(400).send({status:"false",message:"password is doesnot Match"})}
    const token=jwt.sign({id:user._id},process.env.SECRETKEY,{expiresIn:"1d"})
    res.cookie("x-api-key",token)
    res.status(200).send({status:"true",message:"login success",token})
}
module.exports={login}