const express = require('express')
const router = express.Router()
const{createAuthor} =require("../controller/Authorcontroller/AuthorController")
const{creatingPost}=require("../controller/BlogsController/Post")
const{checkDeletedBlog}=require('../controller/BlogsController/delete')

router.post('/rahul',function(req,res){
    let data = req.body
    
})

router.post("/createAuthor",createAuthor)
router.post("/creatingPost",creatingPost)
router.delete("/checkDeletedBlog/:blogId",checkDeletedBlog)



module.exports = router