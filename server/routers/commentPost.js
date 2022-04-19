import express from 'express';
import { getComments,getCommentsByPost,postComment,updateComment,deleteComment } from '../controllers/CommentPost.js';

const router = express.Router();

router.get('/',getComments);
router.get('/getbypost/:postId',getCommentsByPost);
router.post('/',postComment);
router.put('/:id',updateComment);
router.delete('/:id',deleteComment);

export default router;