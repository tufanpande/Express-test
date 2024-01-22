const express = require("express");


const indexRouter = require("./routes");
const app = express();

app.use("/", indexRouter);
app.listen(8000,()=>{
    console.log("Application is running");
});





// GET => server to fE
//POST => FE to server
//delete=> FE to server delete my 1 data
// PUT => FE to server ; fix majority property of data
// PATCH => FE to server ma single data change garney hai




