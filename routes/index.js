const router = require("express").Router();

 const booksRouter=  require("./book.route");
 const userRouter= require("./useeer.route");
 const blogsRouter = require("./blogs.routes");
 const rolesRouter =require("./roles.route");
 const categoriesRouter =require("./categories.route")
 const blogRouter= require("../modules/blogs/blog.route")
 const apiIndex= "api/v1";

 router.get("/",(req,res,next)=>{
  try{
  console.log({body:req.body});
  res.json({msg: "hello from index router"});
  }catch(e){
    next(e);
  }
 });
 

// // printing Hello world 
// router.get("/",(req, res)=>{
//     res.json({msg:"Hello world"});
// });
// router.get("/tufan",(req, res)=>{
//     res.json({msg:"Hello tufan"});
// });

// printing Hello world  ROute 1 
// router.get("/",(req, res)=>{
//     res.json({msg:"Hello world"});
// });
// // Route 2
// router.get("/:name/:come",(req, res)=>{
//     const data = req.params.name;
//     const data2 =req.params.come;
//     res.json({msg:`Hello ${data} wel${data2}`});
// });
//    // Route 3
// router.get("/:a/:b",(req, res)=>{
//     const {a ,b} = req.params;
    
//     const sum =Number(a) + Number(b);
//     res.json({msg:`The sum is ${sum} `});
// });
// router.get("/:random", (req, res) => {
//         const rand = Math.floor(Math.random() * 17);
//     res.json({ msg: `${rand}` });
//   });
  router.use("/blogs",blogRouter);
  router.use("/books", booksRouter);
  router.use("/user",userRouter);
  router.use("/blogs",blogsRouter);
  router.use("/roles",rolesRouter);
  router.use("/categories",categoriesRouter);
  router.use(`${apiIndex}/books`, booksRouter);
module.exports = router;


