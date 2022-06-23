const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({

     userSender:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserModel'
       
     },

     userReported:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserModel'
      
     },

    description:{
        type:String,
        required:true
        
    }



})

module.exports =  mongoose.model('Reports', reportSchema)