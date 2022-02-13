const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const auth = require('../middleware/auth')

const userModel = mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
        minlenght: 8
    },
    password: {
        type : String,
        required : true,
    }
    ,
    firstName: {
        type: String,
        required: true,
        minlenght: 3,
        maxlenght: 15,
    },
    lastName: {
        type: String,
        required: true,
        minlenght: 3,
        maxlenght: 15,
    },
    dob: {
        type: Date
    }
},
    { timeStamp: true }
);

userModel.pre('save',function(){
    const salt = bcrypt.genSaltSync(10);
    this.password = bcrypt.hashSync(this.password, salt);
})
userModel.comparePassword = (password)=>{
    return bcrypt.compare(this.password, password);
}

const UserModel = mongoose.model('User', userModel);
module.exports = UserModel;

