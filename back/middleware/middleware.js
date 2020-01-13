const config = require("../config/config")
const jwt = require("jsonwebtoken")
const User = require("../user/userModel")

// let alterData = (req, res, next) => {
//     if (!req.body.title) res.status(400).json("no title provided")
//     let title = req.body.title
//     title[0] = title[0].toUpperCase()
//     req.body.title = title
//     next()
// }

const authenticate = async (req, res, next) => {
    let token = req.header("x-auth")
    let decoded;
    try {
        decoded = jwt.verify(token, config.password)
        let user = User.findOne({
            _id: decoded._id,
            "tokens.token": token
        })
        if (user) {
            req.user = user
            req.token = token
            next()
        } else {
            res.status(401).json("Not authorized")
        }
    } catch(e) {
        res.status(400).json(e)
    }
}

module.exports = {
    authenticate
    // alterData
}