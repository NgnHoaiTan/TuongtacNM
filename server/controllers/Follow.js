import { FollowModel } from "../models/FollowModel.js";

export const getAllFollows = async (req,res)=>{
    try{
        const follows = await FollowModel.find();
        res.status(200).json(follows); 
    }catch(err){
        res.status(500).json({ error: err})
    }
};
export const getFollowingByUser = async (req,res)=>{
    try{
        const follows = await FollowModel.find({user:req.params.id});
        res.status(200).json(follows); 
    }catch(err){
        res.status(500).json({ error: err})
    }
};
export const getFollowedByUser = async (req,res)=>{
    try{
        const follows = await FollowModel.find({following:req.params.id});
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

export const unFollow = async (req, res) => {
    try {
        const follow = await FollowModel.findOneAndDelete({ _id: req.params.id });   
        res.status(200).json(follow);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err });
    }
};

