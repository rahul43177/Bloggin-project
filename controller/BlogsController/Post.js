const{Author_Model}=require("../../Models/authorModel")
const{Blogs_Model}=require("../../Models/blogsModel")

const creatingPost= async(req,res)=>{
   try {
      let data=req.body
    const {title,body,authorId,category} =req.body
    if(!title) return res.status(400).send("title not found")
    if(!body) return res.status(400).send("body not found")
    if(!authorId) return res.status(400).send("authorId not found")
    if(!category) return res.status(400).send("category not found")
   const validId=await Author_Model.findById(authorId)
   if(!validId){
      res.status(404).send({status:false,message:" AuthorId is not found in AuthorMode"})}
   else{
    let createData=await Blogs_Model.create(data)
    res.status(201).send({status:true,data:createData})
  }
      
   } catch (error) {
      res.status(500).send({staus:false,message:"error in post"})
   }
}
module.exports={creatingPost}