import mongoose from "mongoose";
const schema = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'user',
        require:true,
        default:'625bf29d05a2408cf630d04e'
    },
    video:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'video',
        require:true
    }

},{
    versionKey: false,
})
export const ReactionVideoModel = mongoose.model('reaction_video', schema);