const User = require('../models/user');
const {setUser} =  require('../services/auth');
async function handleUserSignup(req,res){
    const {fullName, email,password,role} = req.body;
      await User.create({
        fullName,
        email,
        password,
        role,
    });
    return res.redirect('/login');
}

async function handleUserLogin(req,res){
   try {
    const {email,password} = req.body;
    const user = await User.findOne({email,password});
    if(!user) 
    return res.render('login',{
        error:'Invalid username and password'
    });
    const token = setUser(user);
    res.cookie('token',token);
    //{expires:new Date(Date.now() + 2628000000 ),httpOnly:true}
    return res.redirect('/alljobs');
   } catch (error) {
    console.error(error.message);
   }
}
module.exports={
    handleUserLogin,
    handleUserSignup,
}