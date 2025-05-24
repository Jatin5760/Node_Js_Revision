import { Contact } from "../Models/Contact.js";

// Create a new contact
export const newContact = async (req, res) => {
    const {name, email, phone, type} = req.body;

    if(name == "" || email == "" || phone == "" || type == "") {
        return res.json({message: "Please fill all the fields", success: false});
    }

    let saveContact = await CoContact({
        name,
        email,
        phone,
        type,
    });
}