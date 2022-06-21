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
    creator: {
        type: String,
        require: true,
    },
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
});

const PostModel = mongoose.model('PostModel', postSchema);

module.exports = PostModel;