import {ReactionVideoModel} from "../models/ReactionVideoModel.js"

export const getReactions =async(req,res)=>{
    try{
        const reactions = await ReactionVideoModel.find();
        res.status(200).json(reactions); 
    }catch(err){
        res.status(500).json({ error: err});
    }
};
export const getReactionsByVideo =async(req,res)=>{
    try{
        const reactions = await ReactionVideoModel.find({video:req.params.videoId});
        res.status(200).json(reactions); 
    }catch(err){
        res.status(500).json({ error: err});
    }
};
export const getReactionInVideoByUser =async(req,res)=>{
    try{
        const reactions = await ReactionVideoModel.findOne({video:req.params.videoId,user:req.params.userId});
        res.status(200).json(reactions); 
    }catch(err){
        res.status(500).json({ error: err});
    }
};
export const postReaction = async(req,res)=>{
    try{
        const newReaction = req.body;
        const reaction = new ReactionVideoModel(newReaction);
        await reaction.save();
        res.status(200).json(reaction);
    }catch(err){
        res.status(500).json({ error: err});
    }
};

export const deleteReaction = async (req,res)=>{
    try{
        const react = await ReactionVideoModel.findOneAndDelete({ _id: req.params.id });
        res.status(200).json(react);
    }catch(err){
        res.status(500).json({ error: err});
    }
}