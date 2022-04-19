import {CommentPostModel} from "../models/CommentPostModel.js"

export const getComments =async(req,res)=>{
    try{
        const comments = await CommentPostModel.find();
        res.status(200).json(comments); 
    }catch(err){
        res.status(500).json({ error: err});
    }
};
export const getCommentsByPost =async(req,res)=>{
    try{
        const comments = await CommentPostModel.find({post:req.params.postId});
        res.status(200).json(comments); 
    }catch(err){
        res.status(500).json({ error: err});
    }
};
export const postComment = async(req,res)=>{
    try{
        const newComment = req.body;
        const comment = new CommentPostModel(newComment);
        await comment.save();
        res.status(200).json(comment);
    }catch(err){
        res.status(500).json({ error: err});
    }
};
export const updateComment = async(req,res)=>{
    try{
        let updateCmt = req.body
        const comment = await CommentPostModel.findOneAndUpdate({ _id: req.params.id },updateCmt,{ new: true });
        res.status(200).json(comment);
    }catch(err){
        res.status(500).json({ error: err});
    }
}
export const deleteComment = async (req,res)=>{
    try{
        const comment = await CommentPostModel.findOneAndDelete({ _id: req.params.id });
        res.status(200).json(comment);
    }catch(err){
        res.status(500).json({ error: err});
    }
}