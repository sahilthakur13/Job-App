const express = require('express');
const router = express.Router();
const {handleAdminUserCreated} = require('../constrollers/roles');

router.post('/adminRoute',handleAdminUserCreated);

module.exports=router;