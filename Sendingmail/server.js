const express = require('express');
const app = express();
const SendMail = require('./Sendmail');


app.get('/', (req,res)=> {
    res.send("This is server running");
})

app.get('/mail', SendMail)


app.listen(3000, (req,res)=> {
    console.log("This is running on port 3000");
})