import {ReactionPostModel} from "../models/ReactionPostModel.js"

export const getReactions =async(req,res)=>{
    try{
        const reactions = await ReactionPostModel.find();
        res.status(200).json(reactions); 
    }catch(err){
        res.status(500).json({ error: err});
    }
};
export const postReaction = async(req,res)=>{
    try{
        const newReaction = req.body;
        const reaction = new ReactionPostModel(newReaction);
        await reaction.save();
        res.status(200).json(reaction);
    }catch(err){
        res.status(500).json({ error: err});
    }
};

export const deleteReaction = async (req,res)=>{
    try{
        const react = await ReactionPostModel.findOneAndDelete({ _id: req.params.id });
        res.status(200).json(react);
    }catch(err){
        res.status(500).json({ error: err});
    }
}