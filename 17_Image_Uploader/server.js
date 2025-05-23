import express from "express";
import mongoose from "mongoose";

const app = express();
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
  res.render("index.ejs",{Url:null});
});




const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on the port ${port}`);
});
