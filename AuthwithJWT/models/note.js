const mongoose = require('mongoose');


const MyNoteschema = new mongoose.Schema({
    Title : {
        type : String,
        required: true
    },
    Description : {
        type : String,
        required: true
    },
    UserId : {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
} , {timestamps: true})

const MyNoteModel = mongoose.model("USER", MyNoteschema)

module.exports = MyNoteModel;