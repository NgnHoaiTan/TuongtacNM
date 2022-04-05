import mongoose from "mongoose";
const schema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    // gioi
    kingdom:{
        type:String,
        require:true
    },
    // nganh
    phylum:{
        type:String,
        require:true
    },
    class:{
        type:String,
        require:true
    },
    // bo
    order:{
        type:String,
        require:true
    },
    // ho
    family:{
        type:String,
        require:true
    },
    distribution:{
        type:String,
        require:true
    },
    value_of_use:{
        type:String,
        require:true
    },
    status_creature:{
        type:String,
        require:true
    },
    // hinh thai
    morphology:{
        type: String,
        require:true
    },
    // sinh thai
    ecology:{
        type: String,
        require:true
    },
    // sinh cảnh
    habitat:{
        type:String,
        require:true
    },
    // dia diem sinh song
    living_area:{
        type:String,
        require:true
    },
    coordinates:{
        type:Array,
        require:true
    },
    state_of_maintainment:{
        type:Object,
        require:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'user',
        require:true
    }

},{
    versionKey: false,
})
export const PostModel = mongoose.model('post', schema);