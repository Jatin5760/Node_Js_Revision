import express from 'express';
import { newContact } from '../Controllers/contact';

const router = express.Router();

// New Contact
// @api name : new contact
// @api method : POST
// @api endpoint : /api/contact/new
router.post('/new', newContact)

export default router; 