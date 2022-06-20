import mongoose from 'mongoose';

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
    Admin: [mongoose.Types.ObjectId(_id)],
    members: [mongoose.Types.ObjectId(_id)],
});

const GroupModel = mongoose.model('GroupModel', groupSchema);

export default GroupModel;