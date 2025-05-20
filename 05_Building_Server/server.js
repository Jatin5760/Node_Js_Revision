// Leaning to make a server with Node.js
console.log('Building a server with Node.js');

// Importing the http module
import http from 'http';

// Creating a server
const server = http.createServer((req, res) => {
    res.end('You requested for this page');
});


const port = 3000;
// Listening for requests
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});