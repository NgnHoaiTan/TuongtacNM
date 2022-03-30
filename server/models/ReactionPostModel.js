import mongoose from "mongoose";
const schema = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'user',
        require:true
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