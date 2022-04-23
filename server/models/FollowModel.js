import mongoose from "mongoose";
const schema = mongoose.Schema({
    following:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }],
    followed:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }],
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'user',
        require:true
    },

},{
    versionKey: false,
})
export const FollowModel = mongoose.model('follow', schema);