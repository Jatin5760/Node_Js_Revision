console.log('Routing in Node.js');

// 1. Import the required modules
import http from 'http';

const server = http.createServer((req, res) => {
    console.log(req.url);
    //res.end('Your Request has been accepted')

    if (req.url === '/wdm'){
        res.end('Welcome to WDM');
    }
    else if(req.url === '/srk'){
        res.end('Welcome to SRK');
    }
    else{
        res.end('Invalid URL');
    }

});

const port = 3000;
// 2. Start the server
server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
