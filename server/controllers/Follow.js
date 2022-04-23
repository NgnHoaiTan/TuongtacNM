import { FollowModel } from "../models/FollowModel.js";

export const getAllFollows = async (req,res)=>{
    try{
        const follows = await FollowModel.find();
        res.status(200).json(follows); 
    }catch(err){
        res.status(500).json({ error: err})
    }
};
export const getFollowsByUser = async (req,res)=>{
    try{
        const follows = await FollowModel.find({user:req.params.id});
        res.status(200).json(follows); 
    }catch(err){
        res.status(500).json({ error: err})
    }
};


export const postFollow = async (req, res) => {
    try {
        const follow = new FollowModel(req.body);
        await follow.save();
        res.status(200).json(follow);
    }catch (err) {
        console.log(err);
        res.status(500).json({ error: err });
    }
}; 
export const updateFollow = async (req, res) => {
    try {
        const updateFollow = req.body;
        const follow = await FollowModel.findOneAndUpdate({ _id: req.params.id }, updateFollow, { new: true }); //dieu kien , gia tri moi, user = new?gia tri moi: gia tri cu
        res.status(200).json(follow);
    } catch (err) {
        res.status(500).json({error: err});
    }
};

export const unFollow = async (req, res) => {
    try {
        const follow = await FollowModel.findOneAndDelete({ _id: req.params.id });   
        res.status(200).json(follow);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err });
    }
};

