const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { promisify } = require('util');
const verify = promisify(jwt.verify);
const { SECRET } = process.env;


const auth = async (req, res, next) => {
    const { authorization } = req.header;
    const user = await jwt.verify(authorization, "ggggygygygygygygygyygydssss").catch(e => res.status(401).end())
    req.user = await user.findById(user.id)
    next()
}

module.exports = auth;