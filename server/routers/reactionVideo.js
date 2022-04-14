import express from 'express';
import { getReactions,postReaction,deleteReaction } from '../controllers/ReactionVideo.js';

const router = express.Router();

router.get('/',getReactions);
router.post('/',postReaction);
router.delete('/:id',deleteReaction);

export default router;