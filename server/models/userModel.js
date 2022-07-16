const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        match: /[a-z]/,
        required: true,
    },
    lastName:{
        type: String,
        match: /[a-z]/,
        required: true,
    },
    name: String,
    password: {
        type: String,
        required: true,
    },
    email:  {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        min: 12,
        max: 90,
    },
    gender:{
        type: String,
        enum: ["male", "female"],
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