const multiply = require("./math");
const result = multiply(6,4);
console.log("I am ", result, "years old in 2026");

//the flow is app.js -> require("./math") -> node loads module -> funtion runs -> result printed
