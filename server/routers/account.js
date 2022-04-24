import express from 'express';
import { registerAccount,loginAccount,updateAccount,getListAccountsIsAdmin, getAccounts,getAccount,deleteAccount } from '../controllers/Account.js';
const router = express.Router();

router.get('/',getAccounts);
router.get('/admin',getListAccountsIsAdmin);
router.get('/:id',getAccount);
router.put('/:id',updateAccount);
router.post('/register',registerAccount);
router.post('/login',loginAccount);
router.delete('/:id',deleteAccount);

export default router;