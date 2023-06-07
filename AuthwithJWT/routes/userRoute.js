const express = require('express');
const Userrouter = express.Router();
const {SignUp, SignIn} = require('../controller/usercontrol')


Userrouter.post('/Singup', SignUp);

Userrouter.post('/Signin', SignIn )

module.exports = Userrouter