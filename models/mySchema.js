const mongoose = require('mongoose');


const mySchema = new mongoose.Schema({
    Namme : {
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

const UsersList = mongoose.model("USERSLIST", mySchema)

module.exports = UsersList;