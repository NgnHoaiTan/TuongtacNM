import express from 'express';
import multer from 'multer';
import { getPosts,getPost,getPostByUser,getPostByFollowUser,createPost, deletePost } from '../controllers/Post.js';
const storage = multer.diskStorage({
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname)
    },
    fileFilter:(req,file,cb)=>{
        if(file.mimetype==='image/jpeg'||file.mimetype==='image/png'||file.mimetype==='image/jpg'){
            cb(null,true)
        }else{
            cb({message:"Unsupported file format"},false)
        }
    }
});

const upload = multer({ storage: storage });
const router = express.Router();
router.get('/', getPosts);
router.get('/:id', getPost);
router.get('/getbyuser/:userId', getPostByUser);
router.get('/getbyfollowuser/:userId', getPostByFollowUser);
router.post('/', upload.array('image'), createPost);
router.delete('/:id', deletePost);

export default router;