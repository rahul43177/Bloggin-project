const { Author_Model } = require("../../Models/authorModel")
const { Blogs_Model } = require("../../Models/blogsModel")

const deleteUsingQuery = async (req, res) => {
    try {
        let { category, authorId, tags, subcategory, isPublished } = req.query

        let a = category, b = authorId, c = tags, d = subcategory, e = isPublished


        let x = await Blogs_Model.findAndUpdate({ $and: [{ category: a },
             { authorId: b }, { tags: c }, { subcategory: d }, { isPublished: e }] },{$set:{isDeleted:true}},{new:true})
        if (x.length == 0) return res.status(404).send({ status: false, message: "" })
        console.log(x)
        res.status(200).send({ status: true, message: x })   
    } catch (err) {
        res.status(200).send({ status: false, message: "client error" })
    }       
}    
module.exports = { deleteUsingQuery }
//authorId=646f1ba62b592a5a4b22dd88 &category=travel&subcategory=drama    