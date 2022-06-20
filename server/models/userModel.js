import mongoose from 'mongoose';

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
    followers:[mongoose.Types.ObjectId(_id)],
    following:[mongoose.Types.ObjectId(_id)],
    isAdmin:{
        type: Boolean,
        default: false,
    }
});

const UserModel = mongoose.model('UserModel', userSchema);

export default UserModel;