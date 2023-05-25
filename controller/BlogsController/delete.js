// const{Author_Model}=require("../../Models/authorModel")
const{Blogs_Model}=require("../../Models/blogsModel")

const checkDeletedBlog = async (req,res)=>{
   try {
      let check = req.params.blogId
       let a = await Blogs_Model.findById(check)
       if(!a){ return res.status(404).send({status:false,message:"Id data is not present"})  }
       let b=await Blogs_Model.findOne({_id:check,isDeleted:true})
       console.log(b)
       if(b){return res.status(400).send("All ready deleted")}
       let newBlogData= await Blogs_Model.findByIdAndUpdate(check,{$set:{isDeleted:true}},{new:true}) 
      res.status(200).send({status:true,message:`deleted succesfully`})
      
   } catch (error) {
      res.status(500).send({staus:false,message:"error in deletion"})
      
   }
}
module.exports={checkDeletedBlog}