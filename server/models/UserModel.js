import mongoose from "mongoose";
const schema = mongoose.Schema({
    name:{
        type:String,
        require:true
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
        require:true
    }

},{
    versionKey: false,
})
export const UserModel = mongoose.model('user', schema);