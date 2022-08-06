const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,resp){resp.sendFile(__dirname+"/index.html");});

app.post("/",function(req,res){ 
        var num1 = Number(req.body.n1);
        var num2 = Number(req.body.n2);
        var result = num1+num2;
        res.send("The result of calculation is"+result);
});

app.get("/bmicalculator",function(req,res){res.sendFile(__dirname+"/bmicalculator.html");});
app.post("/bmicalculator",function(req,res){
        var height = Number(req.body.height);
        var weight = Number(req.body.weight);
        var result = weight/(height*height);
        res.send("Result="+result);
});


app.listen(3000,function(){console .log("server started at port 3000");});

