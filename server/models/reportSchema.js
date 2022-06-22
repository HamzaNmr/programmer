const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({

     userSender:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
       
     },

     userReported:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
      
     },

    description:{
        type:String,
        required:true
        
    }



})

module.exports =  mongoose.model('Reports', reportSchema)