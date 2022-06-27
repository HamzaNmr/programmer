
import mongoose from 'mongoose';

import userModel from '../models/userModel.js';
import postModel from '../models/postModel.js';
import ReportModel from '../models/ReportModel.js';

// fucntion to DELETE a User ;

export const DeleteUser = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("User is not exist");

    await userModel.findByIdAndRemove(id);
    res.json({ message: 'User deleted successfuly'});
};

// fucntion to DELETE a Post ;

export const DeletePost = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("Post is not exist");

    await postModel.findByIdAndDelete(id);

    res.json({ message: 'Post deleted successfuly'});
};

//Function to Read REPORT ;

export const getReport = async (req, res) => {
    try{
        const reportModel = await ReportModel.findById();
        res.status(200).json(reportModel);
    } catch (error){
        res.status(404).json({ message: error.message});
    }
};
