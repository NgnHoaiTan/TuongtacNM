import mongoose from "mongoose";

const schema = mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    password: {
        type: String,
        required: true
    },
    is_admin: {
        type: Boolean,
        default: false
    }
},{
    versionKey: false
})

export const AccountModel = mongoose.model('account',schema)