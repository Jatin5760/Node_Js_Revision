console.log("File Handling in Node.js");
// Importing the fs module
// This is a promise-based version of the fs module
// It is used to read and write files in Node.js

import { readFile, writeFile, appendFile, mkdir } from "fs/promises";

const read_file = async (fileName) => {
  const data = await readFile(fileName, "utf-8");
  console.log(data);
};

//read_file('sample.txt')

// This function is used to write data to a file
const write_file = async (fileName, data) => {
  await writeFile(fileName, data);
  console.log("File written successfully");
};

//write_file('ai.py', 'This is a sample file created by Node.js');
//write_file('App.jsx', 'This is a react file created by Node.js');


// This function is used to append data to a file
const append_file = async (fileName, appended_data) => {
  await appendFile(fileName, appended_data, { flag: "a" });
  console.log("File appended successfully");
};

//append_file('App.jsx', 'This is a sample file created by Node.js');


// Create a folder
const create_folder = async (folderName) => {
  await mkdir(folderName);
  console.log("Folder created successfully");
};
//create_folder('components');
//create_folder('public');
//create_folder('assets');



// Folder inside a folder in recursive way
const create_folder_in_folder = async (folderName) => {
  await mkdir(folderName, { recursive: true });
  console.log("Folder created successfully");
};
create_folder_in_folder('src/assets/images');
create_folder_in_folder('src/Python');





// Notes for this whole code
// 1. Ye code Node.js me file handling ke liye likha gaya hai.
// 2. `fs/promises` module ko import kiya gaya hai jo promise-based file handling operations provide karta hai.
// 3. `read_file` function ek file ka content read karta hai aur console me print karta hai.
// 4. `write_file` function ek file me data likhta hai aur success message print karta hai.
// 5. `append_file` function ek file me data append karta hai aur success message print karta hai.
// 6. `create_folder` function ek naya folder create karta hai aur success message print karta hai.
// 7. `create_folder_in_folder` function ek folder ke andar folder recursively create karta hai aur success message print karta hai.
// 8. Har function asynchronous hai aur `await` keyword ka use karke asynchronous operations ko handle kiya gaya hai.
// 9. Code me kuch commented-out function calls diye gaye hain jo specific operations ko test karne ke liye uncomment kiye ja sakte hain.
// 10. Ye code file aur folder operations ko automate karne ke liye useful hai, jaise ki naye files/folders create karna ya existing files ko modify karna.