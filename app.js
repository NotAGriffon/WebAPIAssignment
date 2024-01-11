// Variables
var  express = require("express");
var app = express();
var router = express.Router();
var path = require("path");

app.use(express.static(__dirname+'/pages'));

// JavaScript for a route (INDEX)
app.get("/index", function(req, res)
{
    res.sendFile(path.join(__dirname+"/pages/index.html"));
});

// JavaScript for a route (ADDTOLIST)
app.get("/addToList", function(req, res)
{
    res.sendFile(path.join(__dirname+"/pages/addToList.html"));
});

// JavaScript for a route (LOGIN)
app.get("/login", function(req, res)
{
    res.sendFile(path.join(__dirname+"/pages/login.html"));
});

app.listen(3000, function()
{
    console.log("Running on Port 3000");
});