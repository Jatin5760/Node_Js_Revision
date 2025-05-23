import express from "express";
import mongoose from "mongoose";
import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import path from "path";

const app = express();

cloudinary.config({
  cloud_name: "dywpgraas",
  api_key: "285195566768468",
  api_secret: "Rck844OYA01cOqo9aMYmkRWhRhA",
});

app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(
    "mongodb+srv://jatinsharma14202003:SiN7qsQO1fmhHs5d@cluster0.9edioa9.mongodb.net/",
    {
      dbName: "Image_Uploader",
    }
  )
  .then(() => console.log("MongoDb Connected"))
  .catch((err) => console.log(err));

// Render ejs file
app.get("/", (req, res) => {
  res.render("index.ejs", { Url: null });
});

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
app.post("/upload", upload.single("file"), async (req, res) => {
  const file = req.file.path;
  res.json({
    message: "File uploaded successfully",
  });
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on the port ${port}`);
});
