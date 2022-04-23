import express from 'express';
import { getAllFollows,getFollowingByUser, getFollowedByUser,postFollow,unFollow } from '../controllers/Follow.js';

const router = express.Router();

router.get('/', getAllFollows);
router.get('/getfollowing/:id', getFollowingByUser);
router.get('/getfollowed/:id', getFollowedByUser);
router.post('/', postFollow);
router.delete('/:id', unFollow);

export default router;