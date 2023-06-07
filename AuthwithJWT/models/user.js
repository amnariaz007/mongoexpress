const mongoose = require('mongoose');


const MyUserschema = new mongoose.Schema({
    Name : {
        type : String,
        required: true
    },
    Email : {
        type : String,
        required: true
    },
    Password : {
        type : String,
        required: true
    },
} , {timestamps: true})

const MyUserModel = mongoose.model("USER", MyUserschema)

module.exports = MyUserModel;