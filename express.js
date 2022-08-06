const { response } = require("express");
const express = require("express");
const app  =express();
app.get("/",function(req,resp){resp.send("<h1>hello<h1>");});
app.get("/contact",function(req,resp){resp.send("<p>contact me at <i>hegdenandan013@gmail.com<i><p>");});
app.get("/about",function(req,resp){resp.send("<p>My Name is <i>:Nandan Hegde<i><p>");});
app.get("/hobbies",function(req,resp){resp.send("<p>My hobby is <i>:Coding<i><p>");});

app.listen(3000,function(){console.log("server started at 3000");});