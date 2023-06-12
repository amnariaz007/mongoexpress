const express = require('express');
const bcrypt = require('bcrypt');
const MyUserModel = require('../models/user');
const jwt = require('jsonwebtoken');


const SignUp = async ( req, res) => {

const {Name, Email, Password} = req.body;

try{
    const existuser = await MyUserModel.findOne({Email : Email});
    if (existuser){
        return res.status(400).json({message: "user already exixts"})
    }

    const passwrodd= await bcrypt.hash(Password, 10);

    const result = await MyUserModel.create({
        Email : Email ,
        Password : passwrodd,
        Name : Name
    })

    const createToken = async() => {
        const token = await jwt.sign({ Email : result.Email, id: result._id }, "MYJWTAPI")
        res.status(200).json({user: result, token: token })
        console.log(token, "token");
     
        const uservver = await jwt.verify(token, 'MYJWTAPI');
        console.log(uservver);
     }
     
     
     createToken();
}catch (err){
    console.log(err);
    res.status(500).json({message: "there is any error"})
}

}


const SignIn = async ( req, res) => {
    const { Email, Password} = req.body;

try{
    const existuser = await MyUserModel.findOne({Email : Email});
    if (!existuser){
        return res.status(404).json({message: "user don't exixt"})
    }

    const matchpasswrodd= await bcrypt.compare(Password, existuser.Password);

    if (!matchpasswrodd){
        return res.status(404).json({message: "invalid password"})
    }

    const createToken = async() => {
        const token = await jwt.sign({ Email : existuser.Email, id: existuser._id }, "MYJWTAPI")
        res.status(200).json({user: existuser, token: token })
        console.log(token, "token");
     
        const uservver = await jwt.verify(token, 'MYJWTAPI');
        console.log(uservver);
     }
     
     createToken();
}catch (err){
    console.log(err);
    res.status(500).json({message: "there is any error"})
}


}

module.exports = {SignIn, SignUp}