const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema({
    username : String,
    password : String,
    logged : Boolean,
    firstname : String, 
    lastname : String, 
    email : String,
    contacts : [Object]
})

module.exports.Users = mongoose.model('Users',usersSchema)


