const express = require("express");
const userRoutes = require("./routes/users");
const app = express();

app.use("/users", userRoutes);

app.get("/", (req, res) => {
    res.send("Home Page");
});

app.listen(3000, ()=> {
    console.log("Server is running on port 3000");
});
