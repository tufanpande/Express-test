const express= require("express");
const router = express.Router();
router.get("/", (req, res, next) => {
    const {id }= req.body;
    res.json({ msg: "Welcome to user route" });
    next();
  });
router.post("/",(req,res,next)=>{
    try{
        const data = req.body;
        data.time = Math.floor(data.words/238);
        console.log({data});
        res.json({msg: "Hello form user post roiuter"});


    }catch(e){
        next(e);
    }
});


module.exports= router;
