import express from 'express';
import multer from 'multer';
import { getVideos,getVideo,getVideoByUser,createVideo,deleteVideo } from '../controllers/Video.js';
const storage = multer.diskStorage({
    limits: {
        fileSize: 200000000 // 10000000 Bytes = 10 MB
        },
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname)
    }
});

const upload = multer({ storage: storage });
const router = express.Router();
router.get('/', getVideos);
router.get('/:id', getVideo);
router.get('/getbyuser/:userId', getVideoByUser);
router.post('/', upload.single('video'), createVideo);
router.delete('/:id', deleteVideo);

export default router;