const { isValidObjectId } = require("mongoose")
const{Author_Model}=require("../../Models/authorModel")
const{Blogs_Model}=require("../../Models/blogsModel")

const creatingBlog= async(req,res)=>{
   try {
      let data=req.body
    const {title,body,authorId,category} =req.body
    if(!title) return res.status(404).send("title not found")
    if(!body) return res.status(404).send("body not found")
    if(!authorId) return res.status(404).send("authorId not found")
    if(!category) return res.status(404).send("category not found")
    if(isValidObjectId(authorId)){
   const validId=await Author_Model.findById(authorId)
   if(!validId){
     return res.status(404).send({status:false,message:" AuthorId not found"})}
   else{
    let createData=await Blogs_Model.create(data)
   return res.status(201).send({status:true,data:createData})
  }}
  else return res.status(400).send({statue:false,message:"authorId not valid "})
      
   } catch (error) {
      return res.status(500).send({staus:false,message:"unable to create blog",error:error.message})
   }
}
module.exports={creatingBlog}