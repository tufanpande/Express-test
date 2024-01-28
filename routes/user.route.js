const router= require("express").Router();

router.get("/", (req, res)=>{
    res.json({msg:"hello from user"});
});


router.post("/",(req,res)=>{
    
    console.log(req.query);
});
module.exports=router;
