import jwt from "jsonwebtoken";
import { User } from "../Models/User.js";

export const isAuthenticated = async (req, res, next) => {
  const token = req.header("Auth");

  if (!token) {
    res.json({
      message: "Please login first",
    });
  }
  console.log("check token", token);

  const decoded = jwt.verify(token, process.env.JWT);

  console.log("token data", decoded);

  const id = decoded.userId;

  let user = await User.findById(id);

  if (!user) {
    return res.json({
      message: "User not found",
      success: false,
    });
  }

  req.user = user;

  next();
};
