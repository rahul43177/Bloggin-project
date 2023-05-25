const express = require('express')
const router = express.Router()
const{creatingPost} =require("../controllers/Post")

router.post('/rahul',function(req,res){
    let data = req.body
    
})

router.post("/post",creatingPost)




module.exports = router