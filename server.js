const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
const MySchemaModel = require('./models/channel');
//gujranwala12


//dotenv.config({path: './config.env'});
//const DB = process.env.DATABASES;

const DB = 'mongodb+srv://amanamana606:gujranwala12@cluster0.wqncj59.mongodb.net/Amnaaa?retryWrites=true&w=majority';


mongoose.connect(DB,{ useNewUrlParser: true}).then(()=>{
    console.log("succedd")
}).catch((err)=> {
    console.log( "No connection");
})


app.get('/', (req, res)=> {
    res.send("this is express ")
})

app.get('/insert', (req, res)=> {
     var MySchemamodel = new MySchemaModel();
     MySchemamodel.Name = "Aman"
     MySchemamodel.Email = "amanamana606@gmail.com"
     MySchemamodel.Password = "amn1234"
     MySchemamodel.Age = 20
     MySchemamodel.profession = "I'm a Blockchain Dev by proffesion"
    MySchemamodel.save().then((MySchemamodel)=> {
      console.log(MySchemamodel)
    }).catch((err)=>{
      console.log("There is an error");
    })
    res.send(MySchemamodel);
})
    


app.listen( 3000, (req, res)=> {
    console.log("app is listening on port 3000");
})