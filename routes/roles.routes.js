const router= require("express").Router();

router.get("/", (req, res)=>{
    res.json({msg:"hello from Roles "});
});
module.exports=router;
