import {CommentVideoModel} from "../models/CommentVideoModel.js"

export const getComments =async(req,res)=>{
    try{
        const comments = await CommentVideoModel.find();
        res.status(200).json(comments); 
    }catch(err){
        res.status(500).json({ error: err});
    }
};
export const getCommentsByVideo =async(req,res)=>{
    try{
        const comments = await CommentVideoModel.find({video:req.params.videoId});
        res.status(200).json(comments); 
    }catch(err){
        res.status(500).json({ error: err});
    }
};
export const postComment = async(req,res)=>{
    try{
        const newComment = req.body;
        const comment = new CommentVideoModel(newComment);
        await comment.save();
        res.status(200).json(comment);
    }catch(err){
        res.status(500).json({ error: err});
    }
};
export const updateComment = async(req,res)=>{
    try{
        let updateCmt = req.body
        const comment = await CommentVideoModel.findOneAndUpdate({ _id: req.params.id },updateCmt,{ new: true });
        res.status(200).json(comment);
    }catch(err){
        res.status(500).json({ error: err});
    }
}
export const deleteComment = async (req,res)=>{
    try{
        const comment = await CommentVideoModel.findOneAndDelete({ _id: req.params.id });
        res.status(200).json(comment);
    }catch(err){
        res.status(500).json({ error: err});
    }
}