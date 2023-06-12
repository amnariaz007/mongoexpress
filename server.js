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

app.use(express.json());

var MySchemamodel = new MySchemaModel();
//how to insert data into Database through Nodejs
app.get('/insert', (req, res)=> {
     
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


app.get('/Get', (req,res)=>{
    MySchemaModel.find().then((MySchemaModel)=>{
        //console.log(result)
        res.send(MySchemaModel);
    }).catch((err)=>{
        console.log("there is an error")
    })
    //res.send(result);
});


app.get('/GetId', (req,res)=>{
    MySchemaModel.findById('64772b27a7c12aefc9e8026b').then((MySchemaModel)=>{
        res.send(MySchemaModel)
        //res.send(result);
    }).catch((err)=>{
        console.log("there is an error")
    })
})

app.post('/postdata', async (req, res)=> {
    try {
        const MySchemamodel = await MySchemaModel.create(req.body);
        res.status(200).json(MySchemamodel);

    }catch(err){
        console.log(err.message)
        res.status(500).json({message: err.message});
    }

})
    

app.listen( 3000, (req, res)=> {
    console.log("app is listening on port 3000");
})