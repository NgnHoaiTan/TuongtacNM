import mongoose from "mongoose";
const schema = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'user',
        require:true,
        default:'625bf29d05a2408cf630d04e'
    },
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'post',
        require:true
    }

},{
    versionKey: false,
})
export const ReactionPostModel = mongoose.model('reaction_post', schema);