import mongoose from "mongoose";
const schema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    image: {
        type: String,
        default: "https://thumbs.dreamstime.com/b/portrait-handsome-smiling-young-man-folded-arms-smiling-joyful-cheerful-men-crossed-hands-isolated-studio-shot-172869765.jpg"
    },
    email:{
        type:String,
    },
    phone_number:{
        type:String,
    },
    address:{
        type:String,
    },
    bithday:{
        type: Date,
    },
    gender:{
        type:Boolean,
        default:0
    },
    introduce:{
        type:String,
    },
    education:{
        type:String,
    },
    workplace:{
        type:String,
    },
    account:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'account',
        // require:true
    },
    cloudinary_id: {
        type: String
    } 

},{
    versionKey: false,
})
export const UserModel = mongoose.model('user', schema);