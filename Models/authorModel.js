const mongoose = require('mongoose')

const authorSchema = new mongoose.Schema({
    fname : {
        type : String , 
        required : true
    },
    lname : { 
        type : String ,
        required : true,
        default:" "//need confirmation
    },
    title : { 
        type : String , 
        required : true ,
        enum : ["Mr", "Mrs", "Miss"]
    },
    email : { 
        type : String ,
        required : true , //use regex for validation  
        unique : true
        // ,match: /^([...(a-z)])+([/0-9/])+@([/a-z/]+\.(com|in|org)$)/gi
    },
    password : { 
        type : String ,
        required : true
    }
},{timestamps:true})

const Author_Model=new mongoose.model("Author_Model",authorSchema)
module.exports={Author_Model}