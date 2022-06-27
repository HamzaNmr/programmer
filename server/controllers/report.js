const Report =require('./../models/reportSchema');
const mongoose = require('mongoose');


const addReport = async(req,res)=>{
    
    try{
        const addReport = new Report(req.body)
        
        const saved = await addReport.save();
        
        res.send(saved);
       

    }catch(error){
        res.send(error);
    }
}

const displayAllReport = async(req,res)=>{
    try{

         const DisplayAllReport = await Report.find({})
         res.json(DisplayAllReport)

    }catch(error){
        res.send(error)
    }
}







module.exports = {addReport,displayAllReport}