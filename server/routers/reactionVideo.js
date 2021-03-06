import express from 'express';
import { getReactions,getReactionsByVideo,getMaxReactionofVideo,getReactionInVideoByUser,postReaction,deleteReaction } from '../controllers/ReactionVideo.js';

const router = express.Router();

router.get('/',getReactions);
router.get('/maxreactionbyvideo',getMaxReactionofVideo);
router.get('/getbyvideo/:videoId',getReactionsByVideo);
router.get('/getbyuserinvideo/:videoId/:userId',getReactionInVideoByUser);
router.post('/',postReaction);
router.delete('/:id',deleteReaction);

export default router;