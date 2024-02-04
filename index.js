require("dotenv").config();//for connect DB
const morgan= require("morgan");//for logging(data history) Function
const express = require("express");//exporting Express Modules
const indexRouter = require("./routes");//getting 
const mongoose= require("mongoose");
const PORT= Number(process.env.PORT);
const app = express();



mongoose.connect(process.env.DB).then(()=>{
    console.log("Database is connected");
});

app.use(express.static("public"));

app.use(express.json());

// app.use((res, req, next)=>{
//     req.body.date= new Date().toISOString();
    
   
//     next();
// });

//middleware
// app.use((req,res,next)=>{
//     req.body.country="Nepal";
//     next();
// });




app.use(morgan("dev"));

app.use("/", indexRouter);

app.use((err,req, res,next)=>{
    err= err ? err.toString() :"something went wrong...";
    res.status(500).json({msg: err});
});
app.listen(PORT,()=>{
    console.log(`Application is running  on ${PORT}`);
});





// GET => server to fE
//POST => FE to server
//delete=> FE to server delete my 1 data
// PUT => FE to server ; fix majority property of data
// PATCH => FE to server ma single data change garney hai


 
