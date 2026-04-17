//week7 day6
function requireRole(role){
   return (req, res, next)=>{
      if (req.user.role !== role){
           return res.status(403).json({
               success: false,
               message: "Forbidden: insufficient permissions"
           });
      }

      next();
   }
}

module.exports = requireRole;
