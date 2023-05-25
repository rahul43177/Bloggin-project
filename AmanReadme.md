const{Blogs_Model}=require("../../Models/blogsModel")

const getdata=async(req,res)=>{

 let c={}
    let authorId=req.query.authorId
    if(authorId){
        c.authorId=authorId
    }
    let category=req.query.category
    if(category){
        c.category=category
    }
    let tags=req.query.tags
    if(tags){
        c.tags=tags
    }

console.log(c)

      let x=await Blogs_Model.find(c,{isDeleted:false},{isPublished:true})
    if(!x){

        res.status(200).send({msg:"false",data:x})
    }
    res.status(200).send({msg:"success",data:x})

}
module.exports={getdata}