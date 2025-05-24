import express from 'express';
import { register, login } from '../Controllers/user.js';

const router = express.Router();


// User Register
// @api name : user register
// @api method : POST
// @api endpoint : /api/user/register
router.post('/register', register);


// User Login
// @api name : user login
// @api method : POST
// @api endpoint : /api/user/login
router.post('/login', login);


export default router;