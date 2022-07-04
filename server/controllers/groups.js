const mongoose = require('mongoose');
const GroupModel = require('../models/groupModel.js');

//************** Find group **************
const getGrousp = async (req, res) => {
    try{
        const groups = await GroupModel.find();

        res.status(200).json(groups);
    } catch (error){
        res.status(404).json({ message: error.message});
    }
};

 //************** Create group **************
 const createGroup = async (req, res) => {
    const group = req.body;
    const newGroup = new GroupModel(group);
    
    try{
        await newGroup.save();

        res.status(201).json(newGroup);
    } catch (error){
        res.status(409).json({ message: error.message })
    }
};
 //************** Edit group info **************
 const updateGroup = async (req, res) => {
    const { id: _id } = req.params;
    const group = req.body;

     if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("This group is not exist");

     const updatedGroup = await GroupModel.findByIdAndUpdate(_id, post, { new: true });

     res.json(updatedGroup);
};
 //************** Delete group **************
 const deleteGroup = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("This group is not exist");

    await GroupModel.findByIdAndRemove(id);

    res.json({ message: 'Group deleted successfuly'});
};

module.exports = {getGrousp, createGroup, updateGroup, deleteGroup};