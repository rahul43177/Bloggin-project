const {Blogs_Model}= require('../../Models/blogsModel')

const updateBlog = async function(req,res) {
    try{
        let blogId = req.params.blogId
        let data = req.body
        let blog = await Blogs_Model.findById(blogId)
        let time = new Date()

        if(!blog) {
            res.status(404).send({error : "blog not found"})
        }
        
        let update = await Blogs_Model.findOneAndUpdate(
            {$and : [{_id : blogId} , {isDeleted : false}] } ,
            {$set : {data , isPublished : true , publishedAt : time}} ,
            {new : true}
        )
        res.status(200).send({status : true , message : "Blog updated successfully" , data : update})
       
        
        
    }catch(error) {
        console.log(error)
        res.status(500).send({error:"Internal Server Error"})
    }
}


module.exports = {updateBlog}