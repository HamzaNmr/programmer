const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    name: String,
    creator: {
        type: String,
    },
    tags: [String],
    selectedFile: String,
    likes: {
        type: [String],
        default: []
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
});

const PostModel = mongoose.model('PostModel', postSchema);

module.exports = PostModel;