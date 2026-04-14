/*
const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/auth");

router.get("/", authMiddleware, (req, res) => {
     res.json([
         { id: 1, name: "solo"},
         { id: 2, name: "spencer"}
     ]);
});


module.exports = router;
*/



/*
const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/auth");

let users =[
         { id: 1, name: "solo"},
         { id: 2, name: "spencer"}
];

let nextId = 4;

router.get("/", authMiddleware, (req, res)=>{
       res.json(users);
});

router.get("/:id", (req, res)=> {
       const userId = parseInt(req.params.id);
       const user =  users.find(u => u.id === userId);

       if (!user){
             return res.status(404).send("User not found");
       }

       res.json(user);
});

router.post("/", (req, res)=>{
      const newUser= {
//           id: users.length +1,
             id: nextId++,
             name: req.body.name
      };

      users.push(newUser);

      res.json({
          message: "User added",
          user: newUser
      });
});
*/








/*
//DAY 4 FULL CRUD API


const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/auth");

let users =[
         { id: 1, name: "solo"},
         { id: 2, name: "spencer"}
];

let nextId = 4;

router.get("/", authMiddleware, (req, res)=>{
       res.json(users);
});

router.get("/:id", (req, res)=> {
       const userId = parseInt(req.params.id);
       const user =  users.find(u => u.id === userId);

       if (!user){
             return res.status(404).send("User not found");
       }

       res.json(user);
});

router.post("/", (req, res)=>{
      const newUser= {
//           id: users.length +1,
             id: nextId++,
             name: req.body.name
      };

      users.push(newUser);

      res.json({
          message: "User added",
          user: newUser
      });
});


router.put("/:id",(req, res)=>{
      const userId = parseInt(req.params.id);
      const user = users.find(u=>u.id===userId);

      if (!user){
          return res.status(404).send("User not found");
      }

      user.name = req.body.name;

      res.json({
          message: "User updated",
          user: user
      });
});


router.delete("/:id", (req, res)=>{
       const userId = parseInt(req.params.id);
       const index = users.findIndex(u=>u.id===userId);

       if (index === -1){
             return res.status(404).send("User not found");
       }

       users.splice(index,1);

       res.json({
            message: "User deleted"
       });

});


module.exports = router;

*/













// DAY 5 persistence

/*
const express = require("express");
const router = express.Router();

const fs = require("fs");
const authMiddleware = require("../middleware/auth");

let users = JSON.parse(fs.readFileSync("users.json"));

let nextId = 4;

router.get("/", authMiddleware, (req, res)=>{
       res.json(users);
});

router.get("/:id", (req, res)=> {
       const userId = parseInt(req.params.id);
       const user =  users.find(u => u.id === userId);

       if (!user){
             return res.status(404).send("User not found");
       }

       res.json(user);
});

router.post("/", (req, res)=>{
      const newUser= {
//           id: users.length +1,
             id: nextId++,
             name: req.body.name
      };

      users.push(newUser);
      fs.writeFileSync("users.json", JSON.stringify(users, null, 2));

      res.json({
          message: "User added",
          user: newUser
      });
});


router.put("/:id",(req, res)=>{
      const userId = parseInt(req.params.id);
      const user = users.find(u=>u.id===userId);

      if (!user){
          return res.status(404).send("User not found");
      }

      user.name = req.body.name;
      fs.writeFileSync("users.json", JSON.stringify(users, null, 2));

      res.json({
          message: "User updated",
          user: user
      });
});


router.delete("/:id", (req, res)=>{
       const userId = parseInt(req.params.id);
       const index = users.findIndex(u=>u.id===userId);

       if (index === -1){
             return res.status(404).send("User not found");
       }

       users.splice(index,1);
       fs.writeFileSync("users.json", JSON.stringify(users, null, 2));

       res.json({
            message: "User deleted"
       });

});


module.exports = router;
*/




// DAY 6 VALIDATION AND BETTER STRUCTURE

/*
const express = require("express");
const router = express.Router();

const fs = require("fs");
const authMiddleware = require("../middleware/auth");

let users = JSON.parse(fs.readFileSync("users.json"));

let nextId = 4;

router.get("/", authMiddleware, (req, res)=>{
       res.json(users);
});

router.get("/:id", (req, res)=> {
       const userId = parseInt(req.params.id);
       const user =  users.find(u => u.id === userId);

       if (!user){
             return res.status(404).send("User not found");
       }

       res.json(user);
});

router.post("/", (req, res)=>{
      const name = req.body.name;

      if (!name || name.trim() === ""){
          return res.status(400).send("Name is required");
      }

      const newUser= {
//           id: users.length +1,
             id: nextId++,
             name: name
      };

      users.push(newUser);
      fs.writeFileSync("users.json", JSON.stringify(users, null, 2));

      res.json({
          message: "User added",
          user: newUser
      });
});


router.put("/:id",(req, res)=>{
      const name = req.body.name;
      if (!name || name.trim() === ""){
          return res.status(400).send("Name is requiredd");
      }

      const userId = parseInt(req.params.id);
      const user = users.find(u=>u.id===userId);

      if (!user){
          return res.status(404).send("User not found");
      }

      user.name = name;
      fs.writeFileSync("users.json", JSON.stringify(users, null, 2));

      res.json({
          message: "User updated",
          user: user
      });
});


router.delete("/:id", (req, res)=>{
       const userId = parseInt(req.params.id);
       const index = users.findIndex(u=>u.id===userId);

       if (index === -1){
             return res.status(404).send("User not found");
       }

       users.splice(index,1);
       fs.writeFileSync("users.json", JSON.stringify(users, null, 2));

       res.json({
            message: "User deleted"
       });

});


module.exports = router;

*/


/*
// still when we look at day six , the better structure comes in now where we introduce the concept of controllers

const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/auth");

const {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} = require("../controllers/usersController");

router.get("/", authMiddleware, getUsers);
router.get("/:id", getUserById);

router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
*/

// week 7 day5

const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} = require("../controllers/usersController");

//Protected routes
router.get("/", authMiddleware, getUsers);
router.get("/:id", getUserById);

router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
