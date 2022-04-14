import express from 'express';
import multer from 'multer';
import { getImages,getImagesByPost,postImage,deleteImage } from '../controllers/Image.js';

const storage = multer.diskStorage({
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname)
    }
});

const upload = multer({ storage: storage });

const router = express.Router();

router.get('/', getImages);
router.get('/post/:id', getImagesByPost);
router.post('/', upload.single('image'), postImage);
router.delete('/:id', deleteImage);

export default router;