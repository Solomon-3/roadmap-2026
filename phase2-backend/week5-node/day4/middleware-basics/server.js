/*
const http = require("http");

const server = http.createServer((req, res) =>{
    //middleware -like logging
    console.log("Method:", req.method);
    console.log("URL:", req.url);
    console.log("Time:", new Date().toISOString());
    console.log("------------------------");

    if (req.url === "/") {
        res.end("Home page");
    }

    else if (req.url === "/about"){
        res.end("About page");
    }

    else {
        res.statusCode = 404;
        res.end("Not found");
    }
});

server.listen(3000, ()=>{
    console.log("server is running on port 3000");
});
*/



/*
const http = require("http");

//midleware function
function logger(req){
    console.log("Method:", req.method);
    console.log("URL:", req.url);
    console.log("Time:", new Date().toISOString());
    console.log("------------------------");
}

const server = http.createServer((req, res) => {
// run middleware
    logger(req);
    if (req.url === "/") {
        res.end("Home page");
    }

    else if (req.url === "/about"){
        console.log("About route accessed");
        res.end("About page");
    }

    else {
        res.statusCode = 404;
        res.end("Not found");
    }
});

server.listen(3000, ()=>{
    console.log("server is running on port 3000");
});

*/



const http = require("http");

//midleware function
function logger(req){
    req.startTime = Date.now();

    console.log("Method:", req.method);
    console.log("URL:", req.url);
}

const server = http.createServer((req, res) => {
// run middleware
    logger(req);

    if (req.url === "/") {
        res.end("Home page");
    }

    else if (req.url === "/about"){
        console.log("About route accessed");
        res.end("About page");
    }

    else {
        res.statusCode = 404;
        res.end("Not found");
    }

    const endTime = Date.now();
    console.log("Request duration", endTime - req.startTime, "ms");
    console.log("----------------");

});

server.listen(3000, ()=>{
    console.log("server is running on port 3000");
});
