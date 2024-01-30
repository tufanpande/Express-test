// const router= require("express").Router();
// // router.get("/", (req, res, next) => {
//     //   try {
//     //     res.json({ data: `hello form user` });
//     //   } catch (e) {
//     //     next(e);
//     //   }
//     // });
    
//     //
//     // const checkRole = (req, res, next) => {
//     // console.log(req.headers);
//     //   console.log("Hello, I'm Role checker");
//     //   next();
//     // };
    
//     // const secondRoler = (req, res, next) => {
//     //   console.log(req.body);
//     //   console.log("Hello, I'm  Second Roler");
//     //   next();
//     // };
//     const checkRoles=(sysRole)=>{
//         return (req, res, next)=>{
//             //logic
            
//             const userRole =[req.body.role || req.headers.role];
//             if (!userRole)throw new Error("Roles are missing");
//         const result =userRole.some((role)=>sysRole.includes(role));
//         if(!result) throw new Error ("Permission denied");
//         next();
        
//     };
//         };

//         
//     router.get("/user",checkRoles(["user"]),(req,res,next)=>{
//         try{
//             res.json({msg:"user Access"});
//         }catch(e){
//             next(e);
//         }
//     });

//     router.get("/admin",checkRoles(["admin"]),(res,req,next)=>{
//         try{
           

//             res.json({msg:"admin Access"});
//         }catch(e){
//             next(e);
//         }
//     });
//     
// //     router.get("/",checkRoles, secondRoler, (req, res, next) => {
// //       try {
// //         console.log(req.body);
// //     res.json({ msg: "hello from user route" });
// //   } catch (e) {
// //     next(e);
// //   }
// // });

// // router.post("/", (req, res, next) => {
// //     try {
// //       const data = Object.keys(req.body).length;
// //       if (!data) throw new Error("Body missing");
// //       console.log({ data: req.body });
  
// //       const result = numberFormatter(
// //         req.params.number || req.body.number || req.query.number
// //       );

// //       res.json({ result });
// //   } catch (e) {
// //     next(e);
// //   }
// // });
// // router.put("/:id", (req, res, next) => {
// //     try {
// //       const result = numberFormatter(
// //         req.params.number || req.body.number || req.query.number
// //       );
// //       res.json({ result });
// //     } catch (e) {
// //       next(e);
// //     }
// //   });
// //   router.patch("/:id", (req, res, next) => {
// //     try {
// //       const result = numberFormatter(
// //         req.params.number || req.body.number || req.query.number
// //       );
// //       res.json({ result });
// //     } catch (e) {
// //       next(e);
// //     }
// //   });
// //   router.delete("/:id", (req, res, next) => {
// //     try {
// //       const result = numberFormatter(
// //         req.params.number || req.body.number || req.query.number
// //       );
// //       res.json({ result });
// //     } catch (e) {
// //       next(e);
// //     }
// //   });


// // router.get("/", (req, res)=>{
// //     res.json({msg:"hello from user"});
// // });


// // router.post("/",(req,res)=>{
    
// //     console.log(req.query);
// // });
// module.exports=router;




const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.json({ msg: "Welcome to user route" });
  next();
});

const checkRoles = (sysRole) => {
  return (req, res, next) => {
    const userRoles = req.body.role
      ? [req.body.role]
      : req.headers.role
      ? [req.headers.role]
      : [];
    console.log(userRoles);
    if (userRoles.length === 0) throw new Error("Roles are missing");
    const result = userRoles.some((role) => sysRole.includes(role));
    if (!result) throw new Error("Permission denied");
    next();
  };
};
const encryptPw= (req,res,next)=>{
            next();
      };

router.get("/user", checkRoles(["user"]), (req, res, next) => {
  try {
    res.json({ msg: "User Access " });
  } catch (e) {
    next(e);
  }
});

router.get("/admin", checkRoles(["admin"]), (req, res, next) => {
  try {
    res.json({ msg: "Welcome Admin!" });
  } catch (e) {
    next(e);
  }
});
router.post("/password",checkRoles(["admin"]),encryptPw,(req,res,next)=>{
  const encryptedPassword = req.body.password;
  const userId = req.user.id;
  User.findByIdAndUpdate(userId, { password: encryptedPassword }, (err, user) => {
    if (err) {
      return res.json({ error: 'Internal Server Error' });
    }
    res.json({ message: 'Password updated successfully' });
    next();
  });
});


      
module.exports = router;