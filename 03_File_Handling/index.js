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

