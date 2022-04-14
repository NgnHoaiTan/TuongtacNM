import mongoose from "mongoose";
const schema = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'user',
        require:true
    },
    video:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'video',
        require:true
    }

},{
    versionKey: false,
})
export const ReactionPostModel = mongoose.model('reaction_video', schema);