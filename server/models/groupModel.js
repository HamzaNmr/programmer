const mongoose =  require('mongoose');

const groupSchema = mongoose.Schema({
    name: {
        type: String,
        match: /[a-z]/,
        require: true,
    },
    communityType: String,
    bio: String,
    profilePicture: String,
    backgroundPhoto: String,
    posts: [mongoose.Types.ObjectId(_id)],
    isPublic: {
        type: Boolean,
        default: true,
    },
    Admin: [],
    members: [],
});

const GroupModel = mongoose.model('GroupModel', groupSchema);

module.exports = GroupModel;