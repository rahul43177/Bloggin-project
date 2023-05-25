const express = require('express')
const router = express.Router()
const{createAuthor} =require("../controller/Authorcontroller/AuthorController")
const{creatingPost}=require("../controller/BlogsController/Post")
const{checkDeletedBlog}=require('../controller/BlogsController/delete')
const{getBlog}=require('../controller/BlogsController/getBlogs')
const{deleteUsingQuery}=require("../controller/BlogsController/deleteQuery")
const {updateBlog} =require("../controller/BlogsController/putBlog")

router.post("/authors",createAuthor)
router.post("/blogs",creatingPost)
router.delete("/blogs/:blogId",checkDeletedBlog)
router.get("/getBlogs",getBlog)
router.delete("/blogs",deleteUsingQuery)
router.put("/blogs/:blogId",updateBlog)



module.exports = router