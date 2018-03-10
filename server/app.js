// import files and packages 
var json = require("./data.json");
var express = require("express");

//create an instance of express server
var app = express();

app.get("/", function(request, response) {
    response.send(json);
});

// Export the express application
module.exports = app;

