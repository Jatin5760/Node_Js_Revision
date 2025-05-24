import { Contact } from "../Models/Contact.js";


// get all contacts
export const getAllContacts = async (req, res) => {
  const userContact = await Contact.find();

  if (!userContact) {
    return res.json({ message: "No contacts found", success: false });
  }
  res.json({
    message: "All contacts fetched successfully",
    userContact,
    success: true,
  });
};

// Create a new contact
export const newContact = async (req, res) => {
  const { name, email, phone, type } = req.body;

  if (name == "" || email == "" || phone == "" || type == "") {
    return res.json({ message: "Please fill all the fields", success: false });
  }

  let saveContact = await Contact.create({
    name,
    email,
    phone,
    type,
  });

  res.json({
    message: "Contact created successfully",
    saveContact,
    success: true,
  });
};

// update contact by id
export const updateContactById = async (req, res) => {
  const id = req.params.id;
  const { name, email, phone, type } = req.body;

  let updatedContact = await Contact.findByIdAndUpdate(
    id,
    {
      name,
      email,
      phone,
      type,
    },
    { new: true }
  );

  if (!updatedContact) {
    return res.json({ message: "No contact exist", success: false });
  }
  res.json({
    message: "Contact updated successfully",
    updatedContact,
    success: true,
  });
};

// delete contact by id
export const deleteContactById = async (req, res) => {
  const id = req.params.id;
  let deleteContact = await Contact.findByIdAndDelete(id);

  if (!deleteContact) {
    return res.json({
      message: "Contact deleted successfully",
      success: false,
    });
  }
  res.json({
    message: "Contact updated successfully",
    success: true,
  });
};

// get contact by id
export const getContactById = async (req, res) => {
  const id = req.params.id;

  const userContact = await Contact.findById(id);
  if (!userContact) {
    return res.json({ message: "Contact not found", success: false });
  }

  res.json({
    message: "Contact fetched successfully",
    userContact,
    success: true,
  });
};
