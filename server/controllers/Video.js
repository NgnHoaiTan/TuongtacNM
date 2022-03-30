import {VideoModel} from "../models//VideoModel";
export const getPosts = async (req, res) => {
    try {
        const videos = await VideoModel.find();
        res.status(200).json(videos);        
    } catch (err) {
        res.status(500).json({ error: err});
    }
};
export const getPost = async (req, res) => {
    try {
        const video = await VideoModel.findOne({ _id: req.params.id });
        
        res.status(200).json(video);        
    } catch (err) {
        res.status(500).json({ error: err});
    }
};
export const createPost = async (req, res) => {
    try {
        const newVideo = req.body;
        const video = new VideoModel(newVideo);
        await video.save();
        res.status(200).json(video);
    }catch (err) {
        res.status(500).json({ error: err });
    }
}; 

export const deletetPost = async (req, res) => {
    try {
        const videoId = req.params.id;
        const video = await VideoModel.findOneAndDelete({ _id: videoId });
        res.status(200).json(video);
    } catch (err) {
        res.status(500).json({ error: err });
    }
};
