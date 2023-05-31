const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
const MySchemaModel = require('./models/channel');
//gujranwala12


dotenv.config({path: './config.env'});
const DB = process.env.DATABASES;

mongoose.connect(DB) .then(()=>{
    console.log("succedd")
}).catch((err)=> {
    console.log( "there is an error");
})


app.get('/', (req, res)=> {
    res.send("this is express ")
})

app.get('/insert', (req, res)=> {
     var MySchemamodel = new MySchemaModel();
     MySchemamodel.Name = "Aman"
     MySchemamodel.Email = "amanamana606@gmail.com"
     MySchemamodel.Password = "amn1234"

    MySchemamodel.save()
})
    


app.listen( 3000, (req, res)=> {
    console.log("app is listening on port 3000");
})