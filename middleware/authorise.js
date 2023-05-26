const authorise = function (req, res, next) {
  try {
    let blogId = req.params.blogId;
    if (!blogId) return res.status(404).send({status:false, message:"Blog id not present"});
    if (blogId == req.blog.BlogId) {
      console.log("Authorised");
      next();
    }
  } catch (er) {
    return res.status(401).send({status:false, message:"Not authorised"});
  }
};
