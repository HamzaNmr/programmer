const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        match: /[a-z]/,
        require: true,
    },
    lastName:{
        type: String,
        match: /[a-z]/,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    email:  {
        type: String,
        require: true,
    },
    age: {
        type: Number,
        min: 12,
        max: 90,
    },
    gender:{
        type: String,
        enum: ["male", "frmale"],
    },
    major: String,
    skills: [String],
    experience: Number,
    bio: String,
    profilePicture: String,
    backgroundPhoto: String,
    followers:[],
    following:[],
    isAdmin:{
        type: Boolean,
        default: false,
    }
});

const UserModel = mongoose.model('UserModel', userSchema);

module.exports = UserModel;