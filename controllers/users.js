const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { use } = require("bcryptjs");
const { SECRET } = process.env;

// const create = (user) => User.create(user)

const create = (body) => {
    const { userName, firstName, lastName, password } = body;
    const user = { userName, firstName, lastName, password }
    return User.create(user);
}

const findOne = (id) => {
    return User.findById(id);
}

const find = () => {
    return User.find();
}

const login = async ({ userName, passwrod }) => {
    const user = await User.findOne({ userName }).exec()
    const valid = await user.ComparePassword(passwrod)
    if (!valid) throw "UN_AUTH"
    return jwt.sign({
        userName, userId: user.id
    }, "ggggygygygygygygygyygydssss", { expiresIn: '1h' })
}

const edit = function (id, editData) {
    return User.findByIdAndUpdate(id, { ...editedData })
}

const Delete = function (id) {
    return User.findByIdAndDelete(id)
}

module.exports = { create, login, find, findOne, edit, Delete };