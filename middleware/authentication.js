const jwt = require('jsonwebtoken')
const dotenv = require('dotevn')
dotenv.config()
let tokenCheck = async function(req,res,next) {
    try {
        let token = req.headers['x-api-key']
        if(!token) return res.status(404).send({status : false , error : "access token is not present"})

        let decodedToken = jwt.verify(token , process.env.SECRETKEY)
        if(!decodedToken)  return res.status(401).send({error : "The token is not matching"})

        next()
    } catch(error) {
        res.status(500).send({error : error})
    }
}

module.exports = {tokenCheck}