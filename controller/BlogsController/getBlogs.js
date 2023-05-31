const { isValidObjectId } = require("mongoose");
const{Blogs_Model}=require("../../Models/blogsModel")
const getBlog = async function(req,res){
    
    let {tags,authorId,category,subcategory }=req.query 
    const filter = {};
    
    if (authorId) {
      if(isValidObjectId(authorId)){
      filter.authorId = authorId;}
      else { return res.status(200).send({status:false,message:"no blog of this Author"})}
    }

    if (category) {
      filter.category = category;
    }

    if (tags) {
      filter.tags = tags; 
    }

    if (subcategory) {
      filter.subcategory = subcategory;
    }
    let blogData= await Blogs_Model.find({...filter , isPublished : true , isDeleted : true});
    if(blogData.length>0){
        res.status(200).send({status:true,message:"Blogs list",data:blogData})
    }else{
        res.status(200).send({status:false,message:"No blogs with applied filters"})
    }
}
module.exports={getBlog}






// let authorID = req.params.authorID
// //i will findone _id: 
// let update = await findByIdAndUpdate(authorId , {$set : req.body}, {upsert : true , new: true})
