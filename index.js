const express = require("express");

const app = express();

// printing Hello world 
app.get("/",(req, res)=>{
    res.json({msg:"Hello world"});
});
app.get("/tufan",(req, res)=>{
    res.json({msg:"Hello tufan"});
});

app.listen(8000,()=>{
    console.log("Application is running");
});
