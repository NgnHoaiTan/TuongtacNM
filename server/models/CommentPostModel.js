import mongoose from "mongoose";
const schema = mongoose.Schema({
    content:{
        type:String,
        require:true
    },
    date_upload:{
        type:Date,
        default: Date.now
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'user',
        default:'625bf29d05a2408cf630d04e',
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
export const CommentPostModel = mongoose.model('comment_post', schema);