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

//***************************************************/
// models/Person.js

/*const mongoose = require("mongoose");
const deepPopulate =require("mongoose-deep-populate")
const Schema = mongoose.Schema;

const validateEmail = (email) => {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
  };

function phonenumber(inputtxt)
{
  const phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
  if(inputtxt.value.match(phoneno))
        {
      return true;
        }
      else
        {
        alert("Please fill a valid phone number");
        return false;
        }
}

const UserSchema = new Schema({

    // required: [
    //     'Fname',
    //     'Lname',
    //     'Email',
    //     'Password'
    //   ],

    Fname: {
        type: String,
        required: true,
        unique: true,
        minlength: [2, "Min age is 2 years"],
        maxlength: 20,
    },

    Lname: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 25,
    },

    Email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true,
        format: Email,
        minLength: 6,
        maxLength: [30, "Max length is 30 characters"],
        validate_email: [validateEmail, "Please fill a valid email address"],
        match: [
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
          "Please fill a valid email address",
        ],    
    },

    Password: {
        type: String,
        required: true,
        minLength: 6,
        maxLength: 25,
        description: Password,
      },

    gender: {
        type: String,
        enum: ["male", "female"],
    },

    date_of_birth: {
        type: String,
        format: Date,
      },

    phoneNumber: {
        type: Number,
        minlength: 8,
        maxlength: 15,
        validate_phone: [phonenumber],
        match: [
            /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/,
            "Please fill a valid phone number",
          ],
    },

    type_of_programmer: {
        type: String,
        unique: true,
    },

    isVisible: {
        type: Boolean,
        default: true,
    },

    createdAt: {
        type: Date,
        immutable: true,
        default: () => Date.now(),
    }
    
}, { timestamps: true });

const UserModel = mongoose.model("User", UserSchema,"User");
module.exports = UserModel;*/