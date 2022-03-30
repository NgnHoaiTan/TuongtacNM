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
export const CommentVideoModel = mongoose.model('comment_video', schema);