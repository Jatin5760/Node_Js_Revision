console.log("File Handling in Node.js");
// Importing the fs module
// This is a promise-based version of the fs module
// It is used to read and write files in Node.js

import { readFile, writeFile } from "fs/promises";

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
