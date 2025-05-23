import { Url } from "../Models/Url.js";
import shortid from "shortid";


export const shortUrl = async (req, res) => {
  const longUrl = req.body.longUrl;
  const shortCode = shortid.generate();

  const shortUrl = `http://localhost:1000/${shortCode}`;

  // save to database
  const newUrl = new Url({
    shortCode,
    longUrl,
  });
  await newUrl.save();


  console.log("Shortened URL:", newUrl);

  res.render("index.ejs", { shortUrl: shortUrl });
  
};


export const getOriginalUrl = async (req, res) => {
    
}
