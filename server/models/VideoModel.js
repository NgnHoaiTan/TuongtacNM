import mongoose from "mongoose";
const schema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    videourl:{
        type:String,
        require:true
    },
    title:{
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
    }

},{
    versionKey: false,
})
export const VideoModel = mongoose.model('video', schema);