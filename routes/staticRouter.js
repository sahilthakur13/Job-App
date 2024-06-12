const express = require("express");
const router = express.Router();
const fs = require('fs/promises');
const {checkForAuthentication,restrictTO} = require('../middlewares/auth');

router.get('/createRole',checkForAuthentication,restrictTO(['Admin']),(req,res)=>{
// try {
//  fs.appendFile('log.txt',`${Date.now()}:-${req.method}:-${req.url} get a response\n`)

// } catch (error) {
//   console.error(error.message)  
// }
  return res.render("roleCreate");
});
router.get("/signup", (req, res) => {
  // try {
  //    fs.appendFile('log.txt',`${Date.now()}:-${req.url}:-${req.method} get a response \n`)
  
  // } catch (error) {
  //   console.error(error.message)  
  // }
    return res.render("signup");
  });
router.get("/login", (req, res) => {

    return res.render("login");
  });
router.get('/createJob',checkForAuthentication,restrictTO(["Admin","Editor"]),async(req,res)=>{

  return res.render('jobCreate');
})
router.get('/logout',(req,res)=>{
  res.cookie('token','')
  return res.redirect('/login')
});
  module.exports = router;