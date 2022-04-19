import express from 'express';
import { getReactions,getReactionsByPost,getReactionInPostByUser,postReaction,deleteReaction } from '../controllers/ReactionPost.js';

const router = express.Router();

router.get('/',getReactions);
router.get('/getbypost/:postId',getReactionsByPost);
router.get('/getbyuserinpost/:postId/:userId',getReactionsByPost);
router.post('/',postReaction);
router.delete('/:id',deleteReaction);

export default router;