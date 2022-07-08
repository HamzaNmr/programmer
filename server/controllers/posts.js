const { json } = require('body-parser');
const mongoose = require('mongoose');
const PostModel = require('../models/postModel.js');
require("../passportJwt.js");
const UserModel = require('../models/userModel.js');

 const getPosts = async (req, res) => {
    try{
        const posts = await PostModel.find().sort({ _id: -1 });

        res.status(200).json(posts);
    } catch (error){
        res.status(404).json({ message: error.message});
    }
};

const getPostsBySearch = async (req, res) => {

    const { searchQuery, tags } = req.query;


    try {
        const title = new RegExp(searchQuery, 'i');

        const posts = await PostModel.find({ $or : [{title}, {tags : { $in: tags.split(',')}}]});

        res.json({ data: posts });
    } catch (error) {
        res.status(404).json({ message: error.message});
    }
}

 const createPost = async (req, res) => {
    const post = req.body;

    const newPost = new PostModel({ ...post, creator: req.user._id, createAt: new Date().toISOString() });
    
    try{
        await newPost.save();

        res.status(201).json(newPost);
    } catch (error){
        res.status(409).json({ message: error.message })
    }
};

 const updatePost = async (req, res) => {
    const { id: _id } = req.params;
    const post = req.body;

     if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("This post is not exist");

     const updatedPost = await PostModel.findByIdAndUpdate(_id, post, { new: true });

     res.json(updatedPost);
};

 const deletePost = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("This post is not exist");

    await PostModel.findByIdAndRemove(id);

    res.json({ message: 'Post deleted successfuly'});
};

 const likePost = async (req, res) => {
    const { id } = req.params;

    if(!req.user._id) return json({message: "unauthenticated"});

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("This post is not exist");

    const post = await PostModel.findById(id);

    const index = post.likes.findIndex((id) => id === String(req.user._id));
    if(index === -1){
        post.likes.push(req.user._id);
    }else{
        post.likes = post.likes.filter((id) => id !== String(req.user._id));
    }
    const updatedPost = await PostModel.findByIdAndUpdate(id, post, { new: true });

    res.json(updatedPost);
};

module.exports = { getPostsBySearch, getPosts, createPost, updatePost, deletePost, likePost};