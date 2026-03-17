/*
const express = require("express");
const userRoutes = require("./routes/users");
const productRoutes = require("./routes/products");
const app = express();

app.use("/users", userRoutes);
app.use("/products", productRoutes);

app.get("/", (req, res) => {
    res.send("Home Page");
});

app.listen(3000, ()=> {
    console.log("Server is running on port 3000");
});
*/


const express = require("express");
const userRoutes = require("./routes/users");
const productRoutes = require("./routes/products");
const app = express();

app.use(express.json());

app.use("/users", userRoutes);
app.use("/products", productRoutes);

app.get("/", (req, res) => {
    res.send("Home Page");
});

app.listen(3000, ()=> {
    console.log("Server is running on port 3000");
});
