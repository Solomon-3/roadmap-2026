/*
const http = require("http");

const users = [
    { id: 1, name: "Alice"},
    { id: 2, name: "Bob"},
    { id: 3, name: "Solo"},
    { id: 4, name: "Spencer"},
];

function getUsers(req, res){
     res.setHeader("Content-Type", "application/json");
     res.end(JSON.stringify(users));
}

function home(req, res){
     res.end("API home");
}

function notFound(req, res){
     res.statusCode = 404;
     res.end("Route not found");
}




const routes = {
      "/": home,
      "/users": getUsers,
};

const server = http.createServer((req, res) => {
       const handler = routes[req.url];

       if (handler){
           handler(req, res);
       }

       else{
           notFound(req, res);
       }
});


server.listen(3000, ()=> {
       console.log("Server running on port 3000")
});
*/






const http = require("http");

const users = [
    { id: 1, name: "Alice"},
    { id: 2, name: "Bob"},
    { id: 3, name: "Solo"},
    { id: 4, name: "Spencer"},
];

let products = [
    { id: 1, name: "phone"},
    { id: 2, name: "laptop"},
];

function getUsers(req, res){
     res.setHeader("Content-Type", "application/json");
     res.end(JSON.stringify(users));
}

function getProducts(req, res){
     res.setHeader("Content-Type","application/json");
     res.end(json.stringify(products));
}

function createUser(req, res){
    let body = "";

    req.on("data", chunk => {
        body =+ chunk;
    });

    req.on("end", ()=> {
        const data = JSON.parse(body);

        const newUser = {
            id: users.length +1,
            name: data.name
        };

        user.push(newUser);

        res.end("New user added");
    });
}

function createProduct(req, res){
      let body = "";

      req.on("data", chunk => {
          body =+ chunk;
      });

      req.on("end", ()=> {
         const data = JSON.parse(body);

         const newProduct ={
              id: products.length + 1,
              name: data.name
         };

         products.push(newProduct);

         res.end("Product added");
      });
}

function home(req, res){
     res.end("API home");
}

function notFound(req, res){
     res.statusCode = 404;
     res.end("Route not found");
}



const server = http.createServer((req, res) =>{

       if (req.method === "GET" && req.url === "/users"){
           return getUsers(req, res);
       }

       if (req.method === "POST" && req.url === "/users"){
           return createUser(req, res);
       }

       if (req.method === "GET" && req.url === "/products"){
           return getProducts(req, res);
       }

       if (req.method === "POST" && req.url === "/products"){
           return createProduct(req,res);
       }
       notFound(req, res);
});


server.listen(3000, ()=> {
       console.log("Server running on port 3000")
});
