import { User } from "../Models/User.js";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (name == "" || email == "" || password == "")
    return res.json({ message: "Please fill all the fields!" });

  let user = await User.findOne({ email });
  if (user) {
    return res.json({
      message: "User already exists with this email!",
      success: false,
    });
  }

  const hashPassword = await bcrypt.hash(password, 10);

  user = await User.create({
    name,
    email,
    password: hashPassword,
  });

  res.json({
    message: "User Created Successfully",
    user,
    success: true,
  });
};


export const login  = async (req, res) => {
  const {email, password} = req.body;

  if (email == "" || password == "")
    return res.json({ message: "Please fill all the fields!" });

  const user = await User.findOne({ email });

  if(!user) {
    return res.json({ message: "User not found with this email!", success: false });
  }

  const validpass = await bcrypt.compare(password, user.password);

  if(!validpass) {
    return res.json({ message: "Invalid Password!", success: false });
  }

  res.json({
    message: `Welcome, ${user.name}!`,
    success: true,
  });

}
