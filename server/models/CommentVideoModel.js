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
export const CommentVideoModel = mongoose.model('comment_video', schema);