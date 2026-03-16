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




const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/auth");

let users =[
         { id: 1, name: "solo"},
         { id: 2, name: "spencer"}
];

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
           id: users.length +1,
           name: req.body.name
      };

      users.push(newUser);

      res.json({
          message: "User added",
          user: newUser
      });
});

module.exports = router;
