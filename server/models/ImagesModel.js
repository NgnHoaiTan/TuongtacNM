import mongoose from "mongoose";
const schema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    imageurl:{
        type:String,
        require:true
    },
    
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'post',
        require:true
    },
    cloudinary_id: {
        type: String
    }

},{
    versionKey: false,
})
export const ImagesModel = mongoose.model('images', schema);