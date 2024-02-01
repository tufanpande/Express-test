

const router= require("express").Router();
router.get("/", (req, res, next) => {
    
    res.json({ msg: "Welcome to blog route" });
    next();
  });
  router.post("/",(req,res,next)=>{
    try{
        const data = req.body;
        data.time = Math.floor(data.words/ 238);
        console.log({data});
        res.json({msg: "Hello form blog post router"});


    }catch(e){
        next(e);
    }
});


module.exports=router;