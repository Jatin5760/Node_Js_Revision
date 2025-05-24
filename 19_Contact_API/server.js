import express from 'express';
import mongoose from 'mongoose';


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
    