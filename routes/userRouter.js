const express = require('express');
const router = express.Router();
const {handleUserLogin,handleUserSignup} = require('../constrollers/user');


router.post('/signup',handleUserSignup);
router.post('/login',handleUserLogin);

module.exports= router;