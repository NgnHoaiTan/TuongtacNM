import mongoose from "mongoose";
const schema = mongoose.Schema({
    title:{
        type:String,
        //require:true
    },
    avatar:{
        type:String,
        default:'https://4kwallpapers.com/images/walls/thumbs_2t/5114.jpg'
    },
    // ten khoa hoc
    scientific_name:{
        type:String,
        //require:true
    },
    // ten viet nam
    vietnamese_name:{
        type:String,
        //require:true
    },
    // ten dia phuong
    region_name:{
        type:String,
        //require:true
    },
    date_upload:{
        type:Date,
        default: Date.now
        //require:true
    },
    // gioi
    kingdom:{
        type:String,
        //require:true
    },
    // nganh
    phylum:{
        type:String,
        //require:true
    },
    class:{
        type:String,
        //require:true
    },
    // bo
    order:{
        type:String,
        //require:true
    },
    // ho
    family:{
        type:String,
        //require:true
    },
    distribution:{
        type:String,
        //require:true
    },
    value_of_use:{
        type:String,
       // require:true
    },
    status_creature:{
        type:String,
        //require:true
    },
    // hinh thai
    morphology:{
        type: String,
        //require:true
    },
    // sinh thai
    ecology:{
        type: String,
        //require:true
    },
    // sinh cảnh
    habitat:{
        type:String,
       // require:true
    },
    // dia diem sinh song
    living_area:{
        type:String,
        //require:true
    },
    // vi độ - bề ngang
    latitude:{
        type:Number,
        //require:true
    },
    // kinh độ - bề dọc
    longitude:{
        type:Number,
        //require:true
    },
    state_of_maintainment:{
        type:Object,
        //require:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'user',
        default: '625bf29d05a2408cf630d04e'
        //require:true
    },
    cloudinary_id: {
        type: String
    }
    

},{
    versionKey: false,
})
export const PostModel = mongoose.model('post', schema);