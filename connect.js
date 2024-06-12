const mongodb = require('mongoose');
async function dbconnection(url){
    return mongodb.connect(url)
    .then(()=>{console.log('Mongodb is Connected')})
    .catch((error)=>{console.log(error)})
};
module.exports={
    dbconnection,
}


