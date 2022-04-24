import {ReactionPostModel} from "../models/ReactionPostModel.js"

export const getReactions =async(req,res)=>{
    try{
        const reactions = await ReactionPostModel.find();
        res.status(200).json(reactions); 
    }catch(err){
        res.status(500).json({ error: err});
    }
};
export const getReactionsByPost =async(req,res)=>{
    try{
        const reactions = await ReactionPostModel.find({post:req.params.postId});
        res.status(200).json(reactions); 
    }catch(err){
        res.status(500).json({ error: err});
    }
};
export const getReactionInPostByUser =async(req,res)=>{
    try{
        const reactions = await ReactionPostModel.findOne({post:req.params.postId,user:req.params.userId});
        res.status(200).json(reactions); 
    }catch(err){
        res.status(500).json({ error: err});
    }
};
export const getMaxReactionofPost = async(req,res)=>{
    try{
        const group ={$group:{_id:"$post",count:{$sum:1}}}
        const sort={$sort:{"count":-1}}
        const limit= {$limit:3}
        const reactions = await ReactionPostModel.aggregate([group,sort,limit])
        res.status(200).json(reactions); 

    }catch(err){
        res.status(500).json({ error: err});
    }
}
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