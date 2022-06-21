const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/userModel');

const { hashSync, compareSync } = require('bcrypt');
const { use } = require('passport');


 const registerPost = (req, res) => {
    const user = new UserModel({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hashSync(req.body.password, 10)
    })

    user.save().then(user => {
        res.send({
            success: true,
            message: "user created successfuly",
            user: {
                id: user._id,
                firstName: user.firstName,
            }
        })
    }).catch(error => {
        res.send({
            success: false,
            message: "user created failure",
            error: error,
        })
    })
};

 const loginPost = (req, res) => {
    UserModel.findOne({ email: req.body.email }).then(user => {
        if(!user){
            return res.status(404).send({
                success: false,
                message: "cant find this user",
            })
        }


        if(!compareSync(req.body.password, user.password)){
            return res.status(401).send({
                success: false,
                message: "incorrect password",
            })
        }

        const payload = {
            email :user.email,
            id: user._id,
        }

        const token = jwt.sign(payload, "secretOrPrivateKey", {expiresIn: "1d"});

        return res.status(200).send({
            success: true,
            message: "loged in successfuly",
            token: "Bearer " + token,
        })
    })

};


module.exports = { registerPost, loginPost };