const mongoose = require('mongoose');


const MySchema = new mongoose.Schema({
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
})

const MySchemaModel = mongoose.model("channel", MySchema)

module.exports = MySchemaModel;