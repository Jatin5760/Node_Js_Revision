import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import { User } from "./Models/User.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Home Route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Contact API - Working fine!" });
});

// User Routes - start with /api its a good practice
// @api name : user register
// @api method : POST
// @api endpoint : /api/register

app.post("/api/user/register", async (req, res) => {
  const { name, email, password } = req.body;

  if (name == "" || email == "" || password == "") 
    return res.json({ message: "Please fill all the fields!" });
  

  let user = await User.create({
    name,
    email,
    password,
  });

  res.json({
    message: "User Created Successfully",
    user,
    success: true,
  });
});

// Connecting to MongoDB
mongoose
  .connect(
    "mongodb+srv://jatinsharma14202003:SiN7qsQO1fmhHs5d@cluster0.9edioa9.mongodb.net/",
    {
      dbName: "Contact_API",
    }
  )
  .then(() => console.log("MongoDb Connected"))
  .catch((err) => console.log(err));

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
