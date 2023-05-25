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
    let x = await Blogs_Model.find(filter,{isDeleted:false},{isPublished:true});
    // console.log(x)
    //let y= x.filter(x=>(x.isDeleted==false&&x.isPublished==true))
    if(x.length>0){
        res.status(200).send({status:true,message:"Blogs list",data:x})
    }else{
        res.status(400).send({status:false,message:"No blogs with applied filters"})
    }
}
module.exports={getBlog}