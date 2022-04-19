import cloudinary from "../cloudinary.js";
import { ImagesModel } from "../models/ImagesModel.js";

export const getImages = async(req,res)=>{
    try{
        const images = await ImagesModel.find();
        res.status(200).json(images);
    }catch(err){
        res.status(500).json({error:err});
    }
};
export const getImagesByPost = async(req,res)=>{
    try{
        const images = await ImagesModel.find({post:req.params.id});
        res.status(200).json(images);
    }catch(err){
        res.status(500).json({error:err});
    }
};
export const postImage = async(req,res)=>{
    try{
        const result = await cloudinary.uploader.upload(req.file.path, { folder: 'AnimalDiscovery/Post', resource_type: 'auto' });
        const newImage = req.body;
        newImage.imageurl = result.secure_url;
        const image = new ImagesModel(newImage);
        await image.save();
        res.status(200).json(image);
    }catch(err){
        res.status(500).json({ image: err });
    }
};
export const deleteImage = async (req, res) => {
    try {
        const image = await ImagesModel.findOneAndDelete({ _id: req.params.id });
        await cloudinary.uploader.destroy(image.cloudinary_id);
        res.status(200).json(image);
    } catch (err) {
        res.status(500).json({ error: err });
    }
};

