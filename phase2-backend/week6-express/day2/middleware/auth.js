function authMiddleware(req, res, next){

      const key = req.query.key;

      if (key === "1234"){
            next();
      }

      else {
           res.status(401).send("Unauthorised");
      }
}

module.exports = authMiddleware;

