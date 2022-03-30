import {PostModel} from "../models/PostModel";
export const getPosts = async (req, res) => {
    try {
        const posts = await PostModel.find();
        res.status(200).json(posts);        
    } catch (err) {
        res.status(500).json({ error: err});
    }
};
export const getPost = async (req, res) => {
    try {
        const post = await PostModel.findOne({ _id: req.params.id });
        
        res.status(200).json(post);        
    } catch (err) {
        res.status(500).json({ error: err});
    }
};
export const createPost = async (req, res) => {
    try {
        const newPost = req.body;
        const post = new PostModel(newPost);
        await post.save();
        res.status(200).json(post);
    }catch (err) {
        res.status(500).json({ error: err });
    }
}; 

export const deletetPost = async (req, res) => {
    try {
        const postId = req.params.id;
        const post = await PostModel.findOneAndDelete({ _id: postId });
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json({ error: err });
    }
};
