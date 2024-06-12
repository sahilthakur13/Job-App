const mongoose =  require('mongoose');
const jobSchema = mongoose.Schema({

    jobTitle:{
        type:String,
        required: true,
    },
    experience:{
        type:String,
        required: true,
    },
    jobLocation:{
        type:String,
        required: true,
    },
    salary:{
        type:String,
        required:true,
    },
    companyName:{
        type:String,
        required:true,
    },
createdBy:{
    type: mongoose.Schema.Types.ObjectId,
},
},
{timestramps:true},
)
const job = mongoose.model('jobs',jobSchema);
module.exports = job;