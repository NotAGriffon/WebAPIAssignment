// Variables
var  express = require("express");
var app = express();
var router = express.Router();
var path = require("path");

app.use(express.static(__dirname+'/pages'));

// JavaScript for a route
app.get("/index", function(req, res)
{
    // res.send("Here would be the page from the route.");
    res.sendFile(path.join(__dirname+"/pages/index.html"));
});

app.get("/addToList", function(req, res)
{
    // res.send("Here would be the page from the route.");
    res.sendFile(path.join(__dirname+"/pages/addToList.html"));
});

app.get("/login", function(req, res)
{
    // res.send("Here would be the page from the route.");
    res.sendFile(path.join(__dirname+"/pages/login.html"));
});

app.listen(3000, function()
{
    console.log("Running on Port 3000");
});