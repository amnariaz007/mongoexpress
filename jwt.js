const express = require('express');
const mongoose = require('mongoose');
const app = express();
const jwt = require('jsonwebtoken');



const createToken = async() => {
   const token = await jwt.sign({ id: '64772b27a7c12aefc9e8026b' }, 'Thisisammansheisworkingonmernpracticesideforlearningpurpose', 
   { expiresIn : '2 minutes'});
   console.log(token, "token");

   const uservver = await jwt.verify(token, 'Thisisammansheisworkingonmernpracticesideforlearningpurpose');
   console.log(uservver);
}




createToken();

app.get('/', (req, res)=> {
    res.send("this is express ")
})




app.listen( 3000, (req, res)=> {
    console.log("app is listening on port 3000");
})