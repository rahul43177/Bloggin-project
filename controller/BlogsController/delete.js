const{Author_Model}=require("../../Models/authorModel")
const{Blogs_Model}=require("../../Models/blogsModel")

const checkDeletedBlog = async (req,res)=>{
   let check = req.params.blogId
    let a = await Blogs_Model.findById(check)
   if(!a){ return res.status(404).send({status:false,message:"Id Not Found"})  }
   else{
   let newBlogData= await Blogs_Model.findByIdAndUpdate(check,{$set:{isDeleted:true}},{new:true})
   //let finaldata= await BlogModel.find({isDeleted:false}) 
   res.status(200).send({status:true,message:``})
}
}
module.exports={checkDeletedBlog}