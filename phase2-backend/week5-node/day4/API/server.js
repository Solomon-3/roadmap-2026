/*
const http = require("http");

const server = http.createServer((req, res) => {
     if (req.url === "/users"){
         const users = ["Alice", "Bob", "Solo"];

         res.writeHead(200, {"Content-Type": "application/json"});
         res.end(JSON.stringify(users));
     }

     else if (req.url === "/products" && req.method === "GET") {
         const products =  ["laptop","phone","keyboard"];

         res.writeHead(200, {"Content-Type": "application/json"});
         res.end(JSON.stringify(products));
     }

     else{
         res.writeHead(404, {"Content-TYpe": "text/plain"});
         res.end("Route not found");
     }
});

server.listen(3000, () => {
     console.log("API running on port 3000");
});

*/






const http = require("http");

let users = ["Alice","Bob","Solo"];

const server = http.createServer((req, res) => {
     if (req.url === "/users" && req.method === "GET"){
         res.writeHead(200, {"Content-Type": "application/json"});
         res.end(JSON.stringify(users));
     }

     else if (req.url === "/users" && req.method === "POST") {
         let body = "";

         req.on("data", chunk => {
             body += chunk;
         });

         req.on("end", () =>{
             const data = JSON.parse(body);
             users.push(body);

             res.writeHead(201, {"Content-Type": "application/json"});
             res.end("User added");
         });
     }

     else{
         res.writeHead(404, {"Content-TYpe": "text/plain"});
         res.end("Route not found");
     }
});

server.listen(3000, () => {
     console.log("API running on port 3000");
});
