const router= require("express").Router();

router.get("/", (req, res)=>{
    res.json({msg:"hello from Roles "});
});


router.post("/",(req,res)=>{
    
    console.log(req.params);
});
module.exports=router;
