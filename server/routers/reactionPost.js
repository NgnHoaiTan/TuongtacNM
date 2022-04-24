import express from 'express';
import { getReactions,getReactionsByPost,getReactionInPostByUser,postReaction,deleteReaction,getMaxReactionofPost } from '../controllers/ReactionPost.js';

const router = express.Router();

router.get('/',getReactions);
router.get('/getbypost/:postId',getReactionsByPost);
router.get('/maxreactionbypost',getMaxReactionofPost);
router.get('/getbyuserinpost/:postId/:userId',getReactionInPostByUser);
router.post('/',postReaction);
router.delete('/:id',deleteReaction);

export default router;