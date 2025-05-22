import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: string, require: true },
  email: { type: string, require: true },
  password: { type: string, require: true },
  age: { type: string, require: true },
  phone: { type: Number },
  createdAt: { type: Date, default: Date.now },
});

export const User = mongoose.model("Users", userSchema);
