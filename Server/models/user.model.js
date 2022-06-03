const mongoose = require('mongoose')
let userSchema = mongoose.Schema({
    fullName: String,
    userName: String,
    mobileNumber: String,
    email: String,
    pword:  String,
    bio: String,
    image: String
})

let userModel = mongoose.model('users', userSchema)
module.exports = userModel