const router= require("express").Router();

// const {numberFormatter}= require("../utils/numberFormatter");

// router.get("/", (req, res)=>{
//     res.json({msg:"hello from book"});
// });



router.get("/",(req, res,next)=>{

    try{
        // const {id }=req.params;
       
        // if(!id || !name) throw new Error("Id or name is missing");
        res.json({msg:"get books"});
    }catch(e){
        next(e);
    }
});

router.post("/", (req, res,next)=>{

    try{
        // const data =Object.keys(req.body).length;

        // if(!data) throw new Error("Body is missing");
        res.json({msg:"Create new books"});


    }catch(e){
        next(e);
    }
});
router.put("/:id", (req, res,next)=>{

    try{
        const {id }=req.params;
       
        // if(!id || !name) throw new Error("Id or name is missing");
        res.json({msg:"Update multiple props of books"});
    }catch(e){
        next(e);
    }
});
router.patch("/:id", (req, res,next)=>{

    try{
        const {id }=req.params;
       
        // if(!id) throw new Error("Id  is missing");
        res.json({msg:"update single item of books"});
    }catch(e){
        next(e);
    }
});


// router.get("/:name",(req,res,next)=>{
//     try{
//         const{name}=req.params;
//         r;
//         res.json({msg: `HEllO ${name} `});
//     }catch(e){
//         next(e);
//     }
// });

// router.post("/:number",(req,res)=>{

//     const result = numberFormatter(
//         req.query.number || req.body.number || req.params.number
//         );
//     res.json({msg:result});
// });
// router.put("/:number",(req,res)=>{

//     const result = numberFormatter(
//         req.query.number || req.body.number || req.params.number
//         );
//     res.json({msg:result});
// });

// router.patch("/:number",(req,res)=>{

//     const result = numberFormatter(
//         req.query.number || req.body.number || req.params.number
//         );
//     res.json({msg:result});
// });
// router.post("/:random", (req, res) => {
//     //make a random number console using callback function in express js
//     const ran = Math.floor(Math.random() * 17);
//     res.json({ msg: `${ran}` });
//   });
module.exports=router;
