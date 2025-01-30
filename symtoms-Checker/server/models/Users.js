const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    symptom:String,
    disease:String,
    advice:String
})

const UserModel = mongoose.model('symptoms',userSchema)
module.exports = UserModel