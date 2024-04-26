const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    name:String,
    age:Number,
    lineup:Boolean,
    goals:Number,
    assists:Number
})
const userSchema = new mongoose.Schema({
    username:String,
    password:String,
    teamName:String,
    createdAt: {
        type: Date,
        immutable:true,
        default: () => Date.now()
    },
    updatedAt: {
        type: Date,
        default: () => Date.now()
    },
    players:[playerSchema]
})

module.exports = mongoose.model('users',userSchema);