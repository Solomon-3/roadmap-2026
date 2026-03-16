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
