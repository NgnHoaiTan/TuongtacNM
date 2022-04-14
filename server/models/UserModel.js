import mongoose from "mongoose";
const schema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    image: {
        type: String,
        default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMqI4dJM6gAS7v_jKJy0_bCkeqZpZ-_vPO67WSQpi-9wqkdqScFvd57VvMG3qS2NnbzXU&usqp=CAU"
    },
    email:{
        type:String,
        require:true
    },
    phone_number:{
        type:String,
        require:true
    },
    address:{
        type:String,
        require:true
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