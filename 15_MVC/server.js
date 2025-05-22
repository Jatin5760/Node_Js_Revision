import express from "express";
import mongoose from "mongoose";
import path from "path";
import {User} from './Models/user.js'; 
const app = express();

app.use(express.static(path.join(path.resolve(), "public")));

app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(
    "mongodb+srv://jatinsharma14202003:SiN7qsQO1fmhHs5d@cluster0.9edioa9.mongodb.net/",
    {
      dbName: "NodeJS",
    }
  )
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log(err);
  });

// MVC: Model-View-Controller
app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/form-submit", async (req, res) => {
  // Getting the data from the form
  //console.log(req.body);

  try {
    let user = await User.create(req.body)
    res.json({
        message: "Form submitted successfully, User created",
        success: true,
      });
  } catch (error) {
    
  }
 
});




const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
