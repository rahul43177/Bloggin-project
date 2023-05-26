const { Blogs_Model } = require("../../Models/blogsModel")

const deleteUsingQuery = async (req, res) => {
    try {
        let authorID=req.head
        let deta=req.query
        const a=await Blogs_Model.findOne(deta)
        if(a.authorId!=authorID)return res.status(401).send({status:false, message:"not valid User"});
        // if(!deta)return res.status(400).send("errer in query")
        let beta=await Blogs_Model.findOne({$and:[deta,{isDeleted:true}]})
        if(beta) return res.status(400).send({status:false,message:"all ready deleted"})
        let data = await Blogs_Model.findOneAndUpdate(deta,{$set:{isDeleted:true}},{new:true})
        if (data) return res.status(200).send({ status: true, message: "deleted" })
    } catch (err) {
        res.status(500).send({ status: false, message: "Delet Using Query error",error:err })
    }       
}    
module.exports = { deleteUsingQuery }
