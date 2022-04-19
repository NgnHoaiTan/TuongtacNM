import express from 'express';
import { getComments,getCommentsByVideo,postComment,updateComment,deleteComment } from '../controllers/CommentVideo.js';

const router = express.Router();

router.get('/',getComments);
router.get('/getbyvideo/:videoId',getCommentsByVideo);
router.post('/',postComment);
router.put('/:id',updateComment);
router.delete('/:id',deleteComment);

export default router;