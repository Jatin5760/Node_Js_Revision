import { User } from "../Models/User.js";
export const userRegister = async (req, res) => {
  // Getting the data from the form
  //console.log(req.body);

  try {
    let user = await User.create(req.body);
    res.json({
      message: "Form submitted successfully, User created",
      newUser: user,
      success: true,
    });
  } catch (error) {
    res.json({
      message: "Form submitted successfully, User not created",
    });
  }
};
