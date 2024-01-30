const bcryptjs = require("bcryptjs");
const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.json({ msg: "Welcome to user route" });
  next();
});

// const checkRoles = (sysRole) => {
//   return (req, res, next) => {
//     const userRoles = req.body.role
//       ? [req.body.role]
//       : req.headers.role
//       ? [req.headers.role]
//       : [];
//     console.log(userRoles);
//     if (userRoles.length === 0) throw new Error("Roles are missing");
//     const result = userRoles.some((role) => sysRole.includes(role));
//     if (!result) throw new Error("Permission denied");
//     next();
//   };
// };


const encryptPsw = (req, res, next) => {
  const pass = req.body.password;
  const hashed = bcryptjs.hashSync(pass, 10); 
  console.log(hashed);
  req.hashed = hashed;
  next();
};

// router.get("/user", checkRoles(["user"]), (req, res, next) => {
//   try {
//     res.json({ msg: "User Access " });
//   } catch (e) {
//     next(e);
//   }
// });

// router.get("/admin", checkRoles(["admin"]), (req, res, next) => {
//   try {
//     res.json({ msg: "Welcome Admin!" });
//   } catch (e) {
//     next(e);
//   }
// });
router.get("/password", encryptPsw, (req, res, next) => {
  try {
    //logic
    const hashed = req.hashed;

    res.json({ password: hashed });
  } catch (e) {
    next(e);
  }});


      
module.exports = router;