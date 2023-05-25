const express = require('express')
const app = express()
const route = require('./route/route')
const mongoose = require('mongoose')
require('dotenv').config()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

mongoose.connect("mongodb+srv://amankashyap:EcBHGzVKIVJRo1Mp@cluster0.jdvtfyy.mongodb.net/BlogProject").then(()=>console.log("mongoose is connected"))
.catch((e)=>{console.log("mongoose is not connected")})

app.use('/',route)


app.listen( 3000 ,function(){
    console.log(`THe server is running on port 3000}`)
})