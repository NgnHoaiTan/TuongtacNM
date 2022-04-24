import mongoose from "mongoose";
const schema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    image: {
        type: String,
        default: "https://res.cloudinary.com/hoaitandev/image/upload/v1650636611/AnimalDiscovery/User/istockphoto-1200677760-612x612_kfgufs.jpg"
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
    birthday:{
        type: Date,
    },
    gender:{
        type:Boolean,
        default:false,
    },
    introduction:{
        type:String,
    },
    education:{
        type:String,
    },
    
    account:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'account',
        // require:true
    },
    cloudinary_id: {
        type: String,
        default:'istockphoto-1200677760-612x612_kfgufs'
    } 

},{
    versionKey: false,
})
export const UserModel = mongoose.model('user', schema);