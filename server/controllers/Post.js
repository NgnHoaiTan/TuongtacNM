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
        const avatar = await cloudinary.uploader.upload(req.files[0].path,{folder:'AnimalDiscovery/Post',resource_type: 'auto'}); 
        const post = new PostModel({
            title:req.body.title,
            avatar:avatar.secure_url,
            cloudinary_id:avatar.public_id,
            scientific_name:req.body.scientific_name,
            vietnamese_name:req.body.vietnamese_name,
            region_name:req.body.region_name,
            kingdom:req.body.kingdom,
            phylum:req.body.phylum,
            class:req.body.class,
            order:req.body.order,
            family:req.body.family,
            distribution:req.body.distribution,
            value_of_use:req.body.value_of_use,
            status_creature:req.body.status_creature,
            morphology:req.body.morphology,
            ecology:req.body.ecology,
            living_area:req.body.living_area,
            latitude:req.body.latitude,
            longitude:req.body.longitude,
            state_of_maintainment:req.body.state_of_maintainment,
            user:req.body.user
        });
        await post.save();
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
        
        res.status(200).json(post);
    }catch (err) {
        res.status(500).json({ error: err });
    }
}; 

export const deletePost = async (req, res) => {
    try {
        const postId = req.params.id;
        const post = await PostModel.findOneAndDelete({ _id: postId });
        const images = await ImagesModel.find({post:postId})
        if(images){    
            for(const image of images){ 
                const imagedel = await ImagesModel.findOneAndDelete({post:postId});
                await cloudinary.uploader.destroy(imagedel.cloudinary_id);
                
            }  
        }
        await cloudinary.uploader.destroy(post.cloudinary_id);
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json({ error: err });
    }
};
