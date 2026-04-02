// WEEK 7 DAY 3

const userService = require("../services/userService");

//GET ALL
async function getUsers(req, res){
     try{
         const users = await userService.getAllUsers();

         res.json({
             success: true,
             data: users
         });
     }
     catch(err) {
         res.status(500).json({
             success: false,
             message: err.message
         });
     }
}

// GET ONE
async function getUserById(req, res){
      try{
           const user = await userService.getUserById(req.params.id);

           if (!user){
              return res.status(404).json({
                   success: false,
                   message: "User not found"
              });
           }

           res.json({
                 success: true,
                 data: user
           });
      }
      catch(err){
            res.status(500.)json({
                   success: false,
                   message: err.message
            });
      }
}

//CREATE
async function createUser(req, res){
    const name = req.body.name;

    if (!name || name.trim() === ""){
        return res.status(400).json({
             success: false,
             message: "Name is actually required :)"
        });

    try{
         const newUser = await userService.createUser(name);

         res.json({
             success: true,
             data: newUser
         });
    }
    catch(err){
         res.status(500).json({
             success: false,
             message: err.message
         });
    }

}

//UPDATE
async function updateUser(req,res){
    const name = req.body.name;

    if (!name || name.trim() ===  ""){
         return  res.status(400).json{
              success: false,
              message: "Name is required"
         }
    }

   try{
        const  updatedName = await userService.updateUser(
             req.param.id,
             name
        );

        if (!updatedUser){
            return res.status(400).json{
                  success: false,
                  message: "User not found"
            }
        }

        res.json({
           success: true,
           data: updatedName
        });
   }
   catch (err){
       res.status(500).json({
            success: false,
            message: err.message
       });
   }
}

// DELETE
async function deleteUser(req, res){
      try {
           const deleteUser = await userService.deleteUser(req.params.id);

           if (!deleteUser ){
               return res.status(400).json({
                    success: false,
                    message: "user not found"
               });
           }

           res.json({
                success: true,
                message: "message deleted"
           });
      }
      catch(err){
           res.status(500).json({
                success: false,
                message: err.message
           });
      }
}

module.exports = {
     getUsers,
     getUserById,
     createUser,
     updateUser,
     deleteUser
};
