/*
const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello from express server");
});

app.get("/about",(re, res) => {
    res.send("About page");
});

app.get("/users",(req, res)=> {
    res.json([
       { id: 1, name: "Alice"},
       { id: 2, name: "Spencer"}
    ]);
});

app.get("/products",(req, res)=> {
     res.json([
         { id: 1, name: "laptop"},
         { id: 2, name: "phone"}
     ]);
});

app.listen(3000, ()=>{
   console.log("server running on port 3000");
});
*/




const express = require("express");

const app = express();

//middleware
app.use((req, res, next) => {
     console.log("request received:", req.method, req.url);
     next();
});

app.get("/", (req, res) => {
    res.send("Hello from express server");
});

app.get("/about",(re, res) => {
    res.send("About page");
});

function authMiddleware(req, res, next){
       const key = req.query.key;

       if (key === "1234"){
            next();
       }
       else {
            res.status(401).send("Unauthorised");
       }
}

app.get("/users", authMiddleware, (req, res)=> {
    res.json([
       { id: 1, name: "Alice"},
       { id: 2, name: "Spencer"}
    ]);
});

app.get("/products",(req, res)=> {
     res.json([
         { id: 1, name: "laptop"},
         { id: 2, name: "phone"}
     ]);
});

app.listen(3000, ()=>{
   console.log("server running on port 3000");
});
