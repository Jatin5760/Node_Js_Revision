// Use npm init -y to create a package.json file
console.log('we are learning about modules in node.js');
// Modules are functions in node.js that can be imported and exported

// There are two types of modules in node.js
// 1. CommonJS modules
// 2. ES6 modules

// CommonJS modules are the default module system in node.js
// ES6 modules are the default module system in the browser


// CommonJS modules are imported using require() function
// ES6 modules are imported using import statement

// CommonJS modules are exported using module.exports
//const {sum, subtract, multiply, divide} = require('./Utils.js');

// Es6 module type:'module' in package.json
import {sum, subtract, multiply, divide} from './Utils.js';


// We will use only ES6 modules beause they are the future of javascript
// CommonJS modules are not supported in the browser
// ES6 modules are supported in the browser

console.log('adding two numbers:', sum(2, 3));
console.log('subtracting two numbers:', subtract(2, 3));
console.log('multiplying two numbers:', multiply(2, 3));
console.log('dividing two numbers:', divide(2, 3));

