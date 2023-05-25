const {Author_Model}=require("../../Models/authorModel")
//create
const createAuthor=async (req,res)=>{

     try { const data=req.body
          const{fname,lname,title,email ,password }=data
          if(!fname) return res.status(400).send("fname not found")
          if(!lname) return res.status(400).send("lname not found")
          if(!title) return res.status(400).send("title not found")
          if(!email) return res.status(400).send("email not found")
          if(!password) return res.status(400).send("password not found")
          let c=await Author_Model.findOne({email:email})
          if(c) return res.status(400).send("email already exist")
          let create= await Author_Model.create(data)
          res.status(201).send({status:true,data:create})
          
     } catch (error) {
          res.status(500).send({status:false,message:"error in Creating Author"})
          
     }
}
module.exports={createAuthor}

