console.log('We are learning about path module');

// Path module is used to work with file and directory paths
import path from 'path';

// Join two or more path segments
const fullPath = path.join('/path', 'index.py', 'file.java');
console.log('files join = ',fullPath); 

// Absolute path
const absolutePath = path.resolve('index.js');
console.log('Absolute path = ', absolutePath);


// Extension name
const extName = path.extname('resume.pdf');
console.log('Extension name = ', extName);

if (extName === '.pdf') {
    console.log('This is a PDF file');
}
else{
    console.log('This is not a PDF file');
}