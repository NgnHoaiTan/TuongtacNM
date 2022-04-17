import {VideoModel} from "../models/VideoModel.js";
import cloudinary from "../cloudinary.js";
export const getVideos = async (req, res) => {
    try {
        const videos = await VideoModel.find();
        res.status(200).json(videos);        
    } catch (err) {
        res.status(500).json({ error: err});
    }
};
export const getVideo = async (req, res) => {
    try {
        const video = await VideoModel.findOne({ _id: req.params.id });
        
        res.status(200).json(video);        
    } catch (err) {
        res.status(500).json({ error: err});
    }
};
export const createVideo = async (req, res) => {
    try {
        const result = await cloudinary.uploader.upload(req.file.path, { folder: 'AnimalDiscovery/Video', resource_type: 'auto' });
        const newVideo = req.body;
        newVideo.videourl = result.secure_url;
        newVideo.cloudinary_id = result.public_id;
        const video = new VideoModel(newVideo);
        await video.save();
        res.status(200).json(video);
    }catch (err) {
        res.status(500).json({ error: err });
    }
}; 

export const deleteVideo = async (req, res) => {
    try {
        const video = await VideoModel.findOneAndDelete({ _id: req.params.id });
        await cloudinary.uploader.destroy(video.cloudinary_id);
        res.status(200).json(video);
    } catch (err) {
        res.status(500).json({ error: err });
    }
};
