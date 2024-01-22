const router= require("express").Router();

router.get("/", (req, res)=>{
    res.json({msg:"hello from book"});
});
module.exports=router;
