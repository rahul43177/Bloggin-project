const {Blogs_Model}=require("../Models/blogsModel")

const   authorise = async(req, res, next)=> {
  try {
     let authorID=req.head
    //  console.log(authorID)
    let blogId = req.params.blogId;
    // console.log({blogid:blogId})
    let blog=await Blogs_Model.findById(blogId)
    // let c=blog.authorId
    // console.log(c==authorID)
    if(authorID!=blog.authorId)return res.status(401).send({status:false, message:"not valid User"});
    next() 
} catch (er) {
    return res.status(500).send({status:false, message:"Not authorised"});
  }
};

module.exports={authorise}