import express from "express";
import mongoose from "mongoose";
import {shortUrl} from "./Controllers/url.js"
import {getOriginalUrl} from "./Controllers/url.js"

const app = express();
// We use urlencoded middleware in Express to parse incoming form data sent through the application/x-www-form-urlencoded format. This is the default format when submitting HTML forms. It converts the form data into a JavaScript object, making it easier to access the data in req.body.
app.use(express.urlencoded({extended:true}));

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



// Sorting url logic
app.post('/short', shortUrl);


// Dynamic Route: redirect the original url using short code
app.get('/:shortCode', getOriginalUrl);

const port = 1000;
app.listen(port, () => {
  console.log(`Serever is running on ${port}`);
});
