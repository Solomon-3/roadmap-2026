const http = require("http");

function home(req, res){
     res.end("welcome to the homepage");
}

function about(req, res){
     res.end("About Page");
}

function users(req, res){
     res.end("users page");
}

function products(req, res){
     res.end("Products page");
}

function notFound(req, res){
     res.statusCode = 404;
     res.end("Route not found");
}




// routing table
const routes = {
     "/": home,
     "/about": about,
     "/users": users,
     "/products": products,
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

server.listen (3000, () => {
     console.log("Server listens on port 3000");
});


