const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username:String,
    email:{
        type:String,
        unique:true
    },
    PasswordHash:{
        type:String,
        required:true,
    },
},{timestamps:true})


const userModel = mongoose.model('user',userSchema)

module.exports = userModel; 