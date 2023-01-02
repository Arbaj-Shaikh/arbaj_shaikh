const express=require("express");
const { dirname } = require("path");
var app=express();
var path=require("path");

app.get('/',(req,resp)=>
{
    resp.send("welcome to arbaj resume");

});

app.listen(8000);
console.log("Server started on port no 8000");