import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
  age: { type: String, require: true },
  phone: { type: Number },
  createdAt: { type: Date, default: Date.now },
});

export const User = mongoose.model("Users", userSchema);
