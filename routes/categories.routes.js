const router= require("express").Router();

router.get("/", (req, res)=>{
    res.json({msg:"hello from Categories"});
});

router.post("/",(req,res)=>{
    
    console.log(req.body);
});
module.exports=router;
