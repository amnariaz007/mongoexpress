const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
//gujranwala12


dotenv.config({path: './config.env'});
//const UsersList = require('./models/mySchema');
const DB = process.env.DATABASES;
const PORT = process.env.PORT;

mongoose.connect(DB) .then(()=>{
    console.log("succedd")
}).catch((err)=> {
    console.log( "there is an error");
})

app.get('/', (req, res)=> {
    res.send("This is express ");
})
    

app.listen((req, res)=> {
    console.log(`app is listening on port ${PORT}`);
})