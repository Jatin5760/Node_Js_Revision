import express from "express";
import path from "path";
const app = express();

const products = [
  { id: 1, name: "iPhone 14", price: 999 },
  { id: 2, name: "iPhone 14 Pro", price: 1099 },
  { id: 3, name: "iPhone 14 Pro Max", price: 1199 },
];

// Send a response
app.get("/", (req, res) => {
  // Send a JSON response
  //   res.json({
  //     message: "Welcome to my API",
  //     products: products,
  //     success: true,
  //   });

  // Send an HTML response
//   res.send("<h1>Welcome to my API</h1>");

const dir = path.resolve();
//console.log("My Path:",dir);

const url = path.join(dir, "index.html");
console.log("My URL:",url);

res.sendFile(url);


// res.sendFile()
});

const port = 1000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
