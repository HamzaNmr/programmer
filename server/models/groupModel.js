const mongoose =  require('mongoose');

const groupSchema = mongoose.Schema({
    name: {
        type: String,
        match: /[a-z]/,
        required: true,
    },
    communityType: String,
    bio: String,
    profilePicture: String,
    backgroundPhoto: String,
    posts: [],
    isPublic: {
        type: Boolean,
        default: true,
    },
    Admin: [],
    members: [],
});

const GroupModel = mongoose.model('GroupModel', groupSchema);

module.exports = GroupModel;