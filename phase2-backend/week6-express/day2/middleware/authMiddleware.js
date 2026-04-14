// week 7 day5

const jwt= require("jsonwebtoken");

function authMiddleware(req, res, next){
     const authHeader= req.headers.authorization;

     if(!authHeader){
         return res.status(401).json({
             success: false,
             message: "no token povided"
         });
     }

     const token = authHeader.split(" ")[1];

     try {
        const decoded= jwt.verify(
           token,
           process.env.JWT_SECRET || "secretkey"
        );

        req.user = decoded;

        next();
     }
     catch(err){
         return res.status(401).json({
             success: false,
             message: "no token provided"
         });
     }
}

module.exports = authMiddleware;
