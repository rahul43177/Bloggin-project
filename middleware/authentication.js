var jwt = require('jsonwebtoken');
let tokenCheck = async function(req,res,next) {
    try {
         let token=req.headers["x-api-key"]
        //  console.log(token)
        if(!token) return res.status(404).send({status : false , error : "access token is not present"})
        // console.log(process.env.SECRETKEY)
        let decodedToken = jwt.verify(token,process.env.SECRETKEY)
        // console.log(decodedToken)

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



