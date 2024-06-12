const jwt = require('jsonwebtoken');
const secretKey = 'Sahil@123';
function setUser(user){
       try{
        return jwt.sign({
            _id: user._id,
            email:user.email,
            role:user.role,
            
        },secretKey)
       }
       catch(error){
        return error;
       }
}
function getUser(token){
    if(!token) return null;
    try {
        return jwt.verify(token,secretKey);   

    } catch (error) {
    return {error: 'token is invalid'};         
    }}

module.exports={
    setUser,
    getUser
}
