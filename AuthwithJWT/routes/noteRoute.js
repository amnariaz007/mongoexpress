const express = require('express');
const Noterouter = express.Router();


Noterouter.get('/', (req,res) => {
    res.send("note get response");
})

Noterouter.post('/', (req,res) => {
    res.send('note post reqponse');
})

module.exports = Noterouter