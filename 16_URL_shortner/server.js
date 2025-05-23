import express from "express";
import mongoose from "mongoose";

const app = express();

mongoose
  .connect(
    "mongodb+srv://jatinsharma14202003:SiN7qsQO1fmhHs5d@cluster0.9edioa9.mongodb.net/",
    {
      dbName: "NodeJS_URL_Shortner",
    }
  )
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log(err);
  });

// Render the ejs file
app.get('/', (req, res) => {
  res.render("index.ejs", {shortUrl: null});
});



const port = 1000;
app.listen(port, () => {
  console.log(`Serever is running on ${port}`);
});
