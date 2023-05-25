const express = require('express')
const router = express.Router()
const{createAuthor} =require("../controller/Authorcontroller/AuthorController")
const{creatingPost}=require("../controller/BlogsController/Post")

router.post('/rahul',function(req,res){
    let data = req.body
    
})

router.post("/createAuthor",createAuthor)
router.post("/creatingPost",creatingPost)



module.exports = router