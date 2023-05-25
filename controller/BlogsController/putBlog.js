const { isValidObjectId } = require('mongoose')
const {Blogs_Model}= require('../../Models/blogsModel')

const updateBlog = async function(req,res) {
    try{
        let blogId = req.params.blogId
        if(isValidObjectId(blogId)){
        let data = req.body
        let blog = await Blogs_Model.findById(blogId)
        if(!blog)return res.status(400).send("data not found by id")
        let time = new Date()
        data.isPublished=true,data.publishedAt=time
        let update = await Blogs_Model.findOneAndUpdate(
            {$and : [{_id : blogId} , {isDeleted : false}] } ,
            {$set : data } ,
            {new : true}
        )
        res.status(200).send({status : true , message : "Blog updated successfully" , data : update})}
        else return res.status(400).send("object id is not valid")
       
        
        
    }catch(error) {
        console.log(error)
        res.status(500).send({error:"Internal Server Error"})
    }
}


module.exports = {updateBlog}