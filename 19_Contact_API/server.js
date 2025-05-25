import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import userRouter from "./Routes/user.js";
import contactRouter from "./Routes/contact.js";
import { config } from "dotenv";

const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// .env setup
config({ path: ".env" });

// User Routes - start with /api its a good practice
app.use("/api/user", userRouter);

// Contact Router
app.use("/api/contact", contactRouter);

// Home Route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Contact API - Working fine!" });
});

// Connecting to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    dbName: "Contact_API",
  })
  .then(() => console.log("MongoDb Connected"))
  .catch((err) => console.log(err));

// Port Listening
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
