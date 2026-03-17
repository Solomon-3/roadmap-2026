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
