import express from 'express';
import { getAllFollows,getFollowsByUser,postFollow,updateFollow,unFollow } from '../controllers/Follow.js';

const router = express.Router();

router.get('/', getAllFollows);
router.get('/getbyuser/:id', getFollowsByUser);
router.post('/', postFollow);
router.put('/:id', updateFollow);
router.delete('/:id', unFollow);

export default router;