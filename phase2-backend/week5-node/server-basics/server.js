/*
const http = require("http");

const server = http.createServer((request, response) => {
     response.write("Hello from my server");
     response.end();
});

server.listen(3000, () => {
     console.log("Server running on port 3000");
});
*/





const http = require("http");

const server = http.createServer((request, response) => {
     if (request.url === "/") {
         response.write("Welcome to the home page");
     }

     else if (request.url === "/about") {
        response.write("This is the about page");
     }

    else if  (request.url === "/contact") {
        response.write("Contact us here");
    }

    else {
        response.statusCode = 404; 
        response.write("Page not found");
    }

    response.end();
});

server.listen(3000, () => {
     console.log("Server running on port 3000");
});
