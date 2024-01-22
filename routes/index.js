const router = require("express").Router();

 const booksRouter=  require("./book.route");
 const userRouter= require("./user.routes");
 const blogsRouter = require("./blogs.routes");
 const rolesRouter =require("./roles.routes");
 const categoriesRouter =require("./categories.routes");

// // printing Hello world 
// router.get("/",(req, res)=>{
//     res.json({msg:"Hello world"});
// });
// router.get("/tufan",(req, res)=>{
//     res.json({msg:"Hello tufan"});
// });

// // printing Hello world  ROute 1 
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
//     //make a random number console using callback function in express js
//     const ran = Math.floor(Math.random() * 17);
//     res.json({ msg: `${ran}` });
//   });

  router.use("/books", booksRouter);
  router.use("/user",userRouter);
  router.use("/blogs",blogsRouter);
  router.use("/roles",rolesRouter);
  router.use("/categories",categoriesRouter);
module.exports = router;
