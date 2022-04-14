import express from 'express';
import { getUsers,getUser, getUserByAccount,postUser,updateUser,deletetUser } from '../controllers/User.js';
import multer from 'multer';

const storage = multer.diskStorage({
    filename:(req,file,cb)=>{
        cb(null,Date.now()+file.originalname)
    }
})
const upload = multer({storage:storage});
const router = express.Router();

router.get('/',getUsers);
router.get('/:id',getUser);
router.get('/account/:id',getUserByAccount);
router.post('/',upload.single('image'),postUser);
router.put('/:id',upload.single('image'),updateUser);
router.delete('/:id',deletetUser);

export default router;