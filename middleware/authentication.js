var jwt = require('jsonwebtoken');
var cookieParser = require('cookie-parser')
let tokenCheck = async function(req,res,next) {
    try {
        
        const token=req.cookies["x-api-key"]
        if(!token) return res.status(404).send({status : false , error : "access token is not present"})

        let decodedToken = jwt.verify(token , process.env.SECRETKEY)

        if(!decodedToken)  return res.status(401).send({status : false ,error : "The token is not matching"})
        // console.log(decodedToken)
        req.head=decodedToken.id
        //  console.log(req.head)
         next()
    } catch(error) {
        res.status(500).send({error : error})
    }
}

module.exports = {tokenCheck}



