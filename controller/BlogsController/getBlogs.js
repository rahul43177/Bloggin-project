const{Blogs_Model}=require("../../Models/blogsModel")
const getBlog = async function(req,res){
    
    let {tags,authorId,category,subcategory }=req.query 
    const filter = {};
    
    if (authorId) {
      filter.authorId = authorId;
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
    let blogData= await Blogs_Model.find(filter,{isDeleted:false},{isPublished:true});
    if(blogData.length>0){
        res.status(202).send({status:true,message:"Blogs list",data:blogData})
    }else{
        res.status(204).send({status:false,message:"No blogs with applied filters"})
    }
}
module.exports={getBlog}