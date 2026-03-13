/*const http = require("http");

const server = http.createServer((req, res) => {
     console.log("URL:", req.url);
     console.log("METHOD:", req.method);
     console.log("HEADERS:", req.headers);

     res.writeHead(200, {"Content-Type": "text/plain"});
     res.end("Request received");
});

server.listen(3000, () => {
     console.log("Server running on port 3000");
})
*/


/*
const http = require("http");

const server = http.createServer((req, res) => {
    if (req.method === "GET"){
        console.log("This isa GET request");
    }

    if  (req.method === "POST") {
       console.log("This is a POST method");
    }

    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("Check the terminal");
});

server.listen(3000, () => {
    console.log("Server is running on port 3000")
});

*/




const http = require("http");

const server = http.createServer((req, res) => {
    if (req.method === "POST"){
         let body = "";
        
         req.on("data", chunk => {
              body += chunk.toString();
         });

         req.on("end", () => {
              console.log("Received data:",body);
              res.writeHead(200, {"Content-Type": "text/plain"});
              res.end("Data Received");
         });
    }
    else{
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.end("Send a POST request");
    }
});

server.listen(3000, () => {
    console.log("Server is running on port 3000")
});
