import express from "express";
import { deleteContactById, getAllContacts, getContactById, newContact, updateContactById } from "../Controllers/contact.js";

const router = express.Router();

// New Contact
// @api name : new contact
// @api method : POST
// @api endpoint : /api/contact/new
router.post("/new", newContact);

// Get all contact
// @api name : new contact
// @api method : POST
// @api endpoint : /api/contact/new
router.get("/", getAllContacts);

// Get contact by id
// @api name : get contact by id
// @api method : GET
// @api endpoint : /api/contact/:id
router.get("/:id", getContactById);

// Update contact by id
// @api name : update contact by id
// @api method : PUT
// @api endpoint : /api/contact/update/:id
router.put("/:id", updateContactById);

// Delete contact by id
// @api name : delete contact by id
// @api method : DELETE
// @api endpoint : /api/contact/delete/:id
router.delete('/:id', deleteContactById)

export default router;
