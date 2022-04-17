import mongoose from "mongoose";
const schema = mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    videourl:{
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
    cloudinary_id: {
        type: String
    }

},{
    versionKey: false,
})
export const VideoModel = mongoose.model('video', schema);