const express = require('express');
const hbs = require('hbs');
var app = express();
hbs.registerPartials(__dirname+"/views/partials")
app.use(express.static(__dirname+"/public"))

app.use((req,res,next)=>{
next();
});

app.set("express view","hbs");
app.get("/",(req,res)=>{
  res.render('home.hbs',{
    pageTitle:'HomePage'

});

app.get("/bad",(req,res)=>{



  })
});


app.listen(3000,()=>{
  console.log("port 3000")
});
