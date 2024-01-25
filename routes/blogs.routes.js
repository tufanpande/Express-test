const router= require("express").Router();

router.get("/", (req, res)=>{
    res.json({msg:"hello from blogs"});
});

router.post("/",(req,res)=>{

    console.log(req.query);
    console.log({query:req.query});
});
module.exports=router;
