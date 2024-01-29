const express = require("express");


const indexRouter = require("./routes");

const app = express();
app.use(express.json());

app.use((res, req, next)=>{
    const date=new Date().toISOString();
    console.log({date});
    req.body.date= date;
    next();
});

app.use("/", indexRouter);

app.use((err,req, res,next)=>{
    err= err ? err.toString() :"something went wrong...";
    res.status(500).json({msg: err});
});
app.listen(7070,()=>{
    console.log("Application is running  on url: localhost/8000");
});





// GET => server to fE
//POST => FE to server
//delete=> FE to server delete my 1 data
// PUT => FE to server ; fix majority property of data
// PATCH => FE to server ma single data change garney hai




