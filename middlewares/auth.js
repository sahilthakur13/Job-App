const {getUser} = require("../services/auth");
async function checkForAuthentication(req, res, next) {
  const cookieToken = req.cookies?.token;
  req.user = null;
  if (!cookieToken) return res.redirect('/login');

  try {
    const token = cookieToken;
  const user = getUser(token);
  req.user = user;
  return next();
  } catch (error){
    return error;
  }
}
function restrictTO(role = []){
  return function(req,res,next){
    if(!req.user) return res.redirect('/login')
    if(!role.includes(req.user.role))return res.send('UNAuthorized')
     return next();
  }
}
module.exports = {
    checkForAuthentication,
    restrictTO,
};