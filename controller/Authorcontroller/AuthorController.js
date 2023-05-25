const {Author_Model}=require("../../Models/authorModel")
//create
const createAuthor=async (req,res)=>{
     try {
          let author=req.body
  
           let create= await Author_Model.create(author)
          res.status(201).send({status:true,data:create})
          
     } catch (error) {
          res.status(500).send({staus:false,message:"error in Creating Author"})
          
     }
}
module.exports={createAuthor}