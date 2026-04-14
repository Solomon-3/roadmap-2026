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

/*
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
*/


// wee7 7 day 4
require("dotenv").config();

const express = require("express");
const userRoutes = require("./routes/users");
const productRoutes = require("./routes/products");
const authRoutes = require("./routes/auth");
const errorHandler = require("./middleware/errorHandler");

const app = express();

//middleware
app.use(express.json());

//routes
app.use("/auth",authRoutes);
app.use("/users", userRoutes);
app.use("/products", productRoutes);

// health check
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "API IS RUNNING"
    });
});

//404 handler (very important)
app.use((req, res)=>{
    res.status(404).json({
        success: false,
        message: "Route not found"
    });
})

// global eror handler must be last
app.use(errorHandler);


app.listen(3000, ()=> {
    console.log("Server is running on port 3000");
});

