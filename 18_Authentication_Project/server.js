import express from "express";
import mongoose from "mongoose";
import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import path from "path";

const app = express();
app.use(express.urlencoded({ extended: true }));

// Configuration of Cloudinary
cloudinary.config({
  cloud_name: "dywpgraas",
  api_key: "285195566768468",
  api_secret: "Rck844OYA01cOqo9aMYmkRWhRhA",
});

// Connecting MongoDB
mongoose
  .connect(
    "mongodb+srv://jatinsharma14202003:SiN7qsQO1fmhHs5d@cluster0.9edioa9.mongodb.net/",
    {
      dbName: "Authentication_DB",
    }
  )
  .then(() => console.log("MongoDb Connected"))
  .catch((err) => console.log(err));

// Render Login file
app.get("/", (req, res) => {
  res.render("login.ejs");
});

// Render Register file
app.get("/register", (req, res) => {
  res.render("register.ejs");
});

// This is the schema for the user
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  filename: String,
  public_id: String,
  imgUrl: String,
});

const User = mongoose.model("user", userSchema);

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: "./public/uploads",

  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + path.extname(file.originalname);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const upload = multer({ storage: storage });

// Upload file to cloudinary
app.post("/register", upload.single("file"), async (req, res) => {
  const filePath = req.file.path;

  const { name, email, password } = req.body;

  const cloudinaryResponse = await cloudinary.uploader.upload(filePath, {
    folder: "NodeJs_Uploads",
  });

  // Creating a new user
  const db = await User.create({
    name: name,
    email: email,
    password: password,
    filename: req.file.originalname,
    public_id: cloudinaryResponse.public_id,
    imgUrl: cloudinaryResponse.secure_url,
  });

  res.redirect("/login");
});


app.post("/login", async (req, res) => {
    const {email,password} = req.body;
    console.log("Priting the body",req.body);
    

    let user = await User.findOne({ email: email, password: password });

    if(!user) {
        res.render("login.ejs");
    }
    else if (user.password !== password) {
        res.render("login.ejs");
    }
    else{
        res.render("profile.ejs", { user });
    }
});




const port = 1000;
app.listen(port, () => {
  console.log(`Server is running on the port ${port}`);
});
