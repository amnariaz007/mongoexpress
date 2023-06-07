const express = require('express');
const mongoose = require('mongoose');
const app = express();
const jwt = require('jsonwebtoken');
const Userrouter= require('./routes/userRoute');
const Noterouter= require('./routes/noteRoute');


app.use(express.json());

const DB = 'mongodb+srv://amanamana606:gujranwala12@cluster0.wqncj59.mongodb.net/Amnaaa?retryWrites=true&w=majority';


mongoose.connect(DB,{ useNewUrlParser: true}).then(()=>{
    console.log("succedd")
}).catch((err)=> {
    console.log( "No connection");
})


app.use('/user', Userrouter);
app.use('/note', Noterouter);




app.get('/', (req, res)=> {
    res.send("this is express ")
})





app.listen( 3000, (req, res)=> {
    console.log("app is listening on port 3000");
})