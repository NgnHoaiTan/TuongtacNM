import cloudinary from "../cloudinary.js";
import { ImagesModel } from "../models/ImagesModel.js";
import {PostModel} from "../models/PostModel.js";
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
export const getPostByUser = async (req, res) => {
    try {
        const posts = await PostModel.find({ user: req.params.userId });
        
        res.status(200).json(posts);        
    } catch (err) {
        res.status(500).json({ error: err});
    }
};
export const createPost = async (req, res) => {
    try {
        const newPost = req.body;
        const post = new PostModel(newPost);
        const files = req.files;
        for(const file of files){
            const {path} = file;
            const result = await cloudinary.uploader.upload(path,{folder:'AnimalDiscovery/Post',resource_type: 'auto'}); 
            const newImage = new ImagesModel({
                imageurl: result.secure_url,
                cloudinary_id: result.public_id,
                post: post._id
            })
            newImage.save();
        }
        //const result = await cloudinary.uploader.upload(req.file.path,{folder:'AnimalDiscovery/Post',resource_type: 'auto'});
        //console.log(result);
        await post.save();
        res.status(200).json(post);
    }catch (err) {
        res.status(500).json({ error: err });
    }
}; 

export const deletePost = async (req, res) => {
    try {
        const postId = req.params.id;
        const post = await PostModel.findOneAndDelete({ _id: postId });
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json({ error: err });
    }
};
