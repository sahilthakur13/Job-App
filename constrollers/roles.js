const user = require('../models/user');
const jobs = require('../models/jobs')
 async function handleGetJobRouter(req,res){
    try {
      const{jobTitle,experience,jobLocation,salary,companyName}= req.body;
   await jobs.create({
        jobTitle,
        experience,
        jobLocation,
        salary,
        companyName,
        createdBy:req.user._id,
    })
    return res.redirect('/alljobs');
    } catch (error) {
      console.error(error.message)
    }
 }
 async function handleAdminUserCreated(req,res){
   try {
      const {fullName,email,password,role} = req.body;
      await user.create({
          fullName,
          email,
          password,
          role,
      });
      return res.redirect('/createRole');
   } catch (error) {
      console.error(error.message);
   }};
module.exports = {
    handleAdminUserCreated,
    handleGetJobRouter,
};