/*
const fs = require("fs");

let users = JSON.parse(fs.readFileSync("users.json"));

let nextId = users.length + 1;

// GET ALL
function getUsers(req, res) {
    res.json(users);
}

// GET ONE
function getUserById(req, res) {
    const userId = parseInt(req.params.id);

    const user = users.find(u => u.id === userId);

    if (!user) {
        return res.status(404).send("User not found");
    }

    res.json(user);
}

// CREATE
function createUser(req, res) {
    const name = req.body.name;

    if (!name || name.trim() === "") {
        return res.status(400).send("Name is required");
    }

    const newUser = {
        id: nextId++,
        name: name
    };

    users.push(newUser);

    fs.writeFileSync("users.json", JSON.stringify(users, null, 2));

    res.json({ message: "User added", user: newUser });
}

// UPDATE
function updateUser(req, res) {
    const userId = parseInt(req.params.id);
    const name = req.body.name;

    if (!name || name.trim() === "") {
        return res.status(400).send("Name is required");
    }

    const user = users.find(u => u.id === userId);

    if (!user) {
        return res.status(404).send("User not found");
    }

    user.name = name;

    fs.writeFileSync("users.json", JSON.stringify(users, null, 2));

    res.json({ message: "User updated", user });
}

// DELETE
function deleteUser(req, res) {
    const userId = parseInt(req.params.id);

    const index = users.findIndex(u => u.id === userId);

    if (index === -1) {
        return res.status(404).send("User not found");
    }

    users.splice(index, 1);

    fs.writeFileSync("users.json", JSON.stringify(users, null, 2));

    res.json({ message: "User deleted" });
}

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};

*/





/*
// DAY 7
const fs = require("fs");

let users = JSON.parse(fs.readFileSync("users.json"));

let nextId = users.length + 1;

// GET ALL
function getUsers(req, res) {
    res.json({
       success: true,
       data: users
    });
}

// GET ONE
function getUserById(req, res) {
    const userId = parseInt(req.params.id);

    const user = users.find(u => u.id === userId);

    if (!user) {
        return res.status(404).json({
               success: false,
               message: "User not found"
        });
    }

    res.json(user);
}

// CREATE
function createUser(req, res) {
    const name = req.body.name;

    if (!name || name.trim() === "") {
        return res.status(400).json({
               success: false,
               message: "Name is required"
        });
    }

    const newUser = {
        id: nextId++,
        name: name
    };

    users.push(newUser);

    fs.writeFileSync("users.json", JSON.stringify(users, null, 2));

    res.json({
         success: true,
        data: newUser
     });
}

// UPDATE
function updateUser(req, res) {
    const userId = parseInt(req.params.id);
    const name = req.body.name;

    if (!name || name.trim() === "") {
        return res.status(400).json({
            success: false,
            message: "Name is required"
        });
    }

    const user = users.find(u => u.id === userId);

    if (!user) {
        return res.status(404).json({
            success: false,
            message: "User not found"
        });
    }

    user.name = name;

    fs.writeFileSync("users.json", JSON.stringify(users, null, 2));

    res.json({
         success: true,
         data: user
    });
}

// DELETE
function deleteUser(req, res) {
    const userId = parseInt(req.params.id);

    const index = users.findIndex(u => u.id === userId);

    if (index === -1) {
        return res.status(404).json({
             success: false,
             message: "User not found"
        });
    }

    users.splice(index, 1);

    fs.writeFileSync("users.json", JSON.stringify(users, null, 2));

    res.json({
         success: true,
         message: "User deleted"
    });
}

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};

*/





// DAY 1 WAS BASICALLY TRYING TO INSTALL POSTGRES AND CREATE USER TABLE AND FINALLY JOIN NODE.JS TO THE DATABASE  REFER TO THE week 7, day1.txt
//WEEEE7    DAY 2

const pool = require("../db");

// GET ALL
async function getUsers(req, res) {
    try{
        const result = await pool.query("SELECT * FROM users ORDER BY id ASC");
              res.json({
                   success: true,
                   data: result.rows
               });
    }
   catch(err){
         res.status(500).json({
             success: false,
             message: err.message
         });
   }
}

// GET ONE
async function getUserById(req, res) {
    const userId = parseInt(req.params.id);

    try {
        const result = await pool.query(
              "SELECT * FROM users WHERE id = $1",
              [userId] 
        )

        if (result.rows.length === 0 ) {
              return res.status(404).json({
                    success: false,
                    message: "User not found"
              });
         }

// week 7 day6 ownwershipcheck
         if (req.user.role != "admin" && req.user.id !== userId){
              return res.status(403).json({
                  success: false,
                  message: "Not your data"
              });
         }

         const user = await userService.getUserById(userId);

         if (!user){
             return res.status(404).json({
                  success: false,
                  message: "User not found"
             });
         }

         res.json({
             success: true,
             data: result.rows[0]
         });
     }
     catch (err){
          res.status(500).json({
               success: false,
               message: err.message
          });
     }
}

// CREATE
async function createUser(req, res) {
    const name = req.body.name;

    if (!name || name.trim() === "") {
        return res.status(400).json({
               success: false,
               message: "Name is required"
        });
    }

    try {
        const result = await pool.query(
            "INSERT INTO users (name) VALUES ($1) RETURNING *",
            [name]
        );

        res.json({
            success: true,
            data: result.rows[0]
        });

    }
    catch(err){
         res.status(500).json({
              success: false,
              message: err.message
         });
    }
}

// UPDATE
async function updateUser(req, res) {
    const userId = parseInt(req.params.id);
    const name = req.body.name;

    if (!name || name.trim() === "") {
        return res.status(400).json({
            success: false,
            message: "Name is required"
        });
    }

    try{
         const result = await pool.query(
              "UPDATE users SET name = $1 WHERE id = $2 RETURNING *",
              [name, userId]
         );

         if (result.rows.length === 0) {
               return res.status(404).json({
                    success: false,
                    message: "User not found"
               });
         }

         res.json({
              success: true,
              data: result.rows[0]
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
async function deleteUser(req, res) {
    const userId = parseInt(req.params.id);

    try{
        const result = await pool.query(
             "DELETE FROM users WHERE  id =$1 RETURNING *",
             [userId]
        );

        if (result.rows.length === 0) {
             return res.status(404).json({
                 success: false,
                 message: "User not found"
             });
        }

       res.json({
            success: true,
            message: "User deleted"
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
