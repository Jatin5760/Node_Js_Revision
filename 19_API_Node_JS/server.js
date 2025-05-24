import express from "express";
import multer from "multer";
import path from "path";
import {v2} from 'cloudinary/config';


const app = express();



const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
