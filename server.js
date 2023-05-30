const express = require('express');
const app = express();


const MongoClient = require('mongodb').MongoClient
let db;

MongoClient.connect('mongodb://amanamana606:19ybachO_@localhost:27017/Amandb', (err, client) => {
  if (err) throw err

 db = client.db('Amndb')

})




app.get(( req, res )=>{

     db.collection('users').find().toArray((err, result) => {
    if (err) throw err

    //console.log(result)
    app.send("This is my result " + result);
  })
    
})

app.listen(3000, (req, res)=> {
    console.log("app is listening on poor 3000");
})